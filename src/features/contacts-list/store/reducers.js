import { injectReducer } from '@utilities/helpers';
import types from './actionTypes'

const INITIAL_STATE = {
  users: [],
};

export default injectReducer(INITIAL_STATE, {
  [types.FETCH_USERS.SUCCESS]: (state, { payload }) => {
    return { ...state, users: payload.users };
  },
});
