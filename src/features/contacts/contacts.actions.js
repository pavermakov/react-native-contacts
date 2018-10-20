import * as API from './contacts.api';
import { actionTypes } from './contacts.constants';

export const fetchUsers = ({ page = 1 }) => (dispatch) => {
  return new Promise((resolve, reject) => {
    API.fetchUsers({ page })
      .then(({ data }) => {
        dispatch({
          type: actionTypes.FETCH_USERS,
          payload: data.results,
        });

        resolve();
      })
      .catch(reject);
  });
};
