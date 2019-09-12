import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage';
import { all, call } from 'redux-saga/effects';
import contactsReducer from './contacts/reducer';
import contactsFlow from './contacts/sagas';

// initializing necessary variables
const initialState = {};
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};


// enabling devtools
/* eslint-disable */
const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
/* eslint-enable */

// reducers configuration
const rootReducer = history_arg => combineReducers({
  router: connectRouter(history_arg),
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

function* rootSaga() {
  yield all([
    call(contactsFlow),
  ]);
}

const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
  ),
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor, history };
export default store;
