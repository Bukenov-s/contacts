import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { TYPES } from './constants';
import * as actions from './actions';
import { getContacts } from './calls';

function* fetchContactsSaga() {
  try {
    const contacts = yield call(getContacts);
    yield put(actions.setContacts(contacts));
  } catch (err) {
    console.log(err);
  }
}

function* getContactSaga({ id }: ReturnType<typeof actions.getContact>) {
  const contacts = yield select(state => state.contacts.contacts_list);
  const [contact] = contacts.filter(item => item.id === +id); // plus sign is there to transform string to a number
  yield put(actions.setContact(contact));
}

function* submitContactEditSaga({ contact }: ReturnType<typeof actions.submitContactEdit>) {
  yield put(actions.saveEditedContact(contact));
  yield put(actions.clearSelectedContact());
  yield put(push('/'));
}

function* cancelContactEditSaga() {
  yield put(actions.clearSelectedContact());
  yield put(push('/'));
}

// trigger contacts fetching on initialization,
// so it wouldn't change our data later on,
export default function* contactsFlow() {
  yield takeLatest('persist/REHYDRATE', fetchContactsSaga);
  yield takeLatest(TYPES.GET_CONTACT, getContactSaga);
  yield takeLatest(TYPES.CANCEL_CONTACT_EDIT, cancelContactEditSaga);
  yield takeLatest(TYPES.SUBMIT_CONTACT_EDIT, submitContactEditSaga);
}
