import { injectReducer } from '@utilities/helpers';
import { actionTypes } from './contacts.constants';

const INITIAL_STATE = {
  users: [],
};

export default injectReducer(INITIAL_STATE, {
  [actionTypes.FETCH_USERS]: (state, { payload }) => {
    return {
      ...state,
      users: state.users.concat(payload),
    };
  },
});
