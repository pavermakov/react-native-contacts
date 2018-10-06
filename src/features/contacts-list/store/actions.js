import types from './actionTypes';

export const fetchUsers = () => {
  return {
    type: types.FETCH_USERS.REQUEST,
    meta: {
      thunk: true
    }
  };
};
