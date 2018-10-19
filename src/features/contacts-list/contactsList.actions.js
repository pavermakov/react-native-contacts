import * as API from './contactsList.api';
import { actionTypes } from './contactsList.constants';

export const fetchUsers = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    API.fetchUsers()
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
