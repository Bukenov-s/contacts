import { API } from '~/redux/api';
import { URLS } from './constants';

export const getContacts = () => API
  .get(URLS.USERS)
  .then(res => res.data
    .map(({
      id,
      name,
      phone,
      email,
    }) => ({
      id,
      name,
      phone,
      email,
    })));
