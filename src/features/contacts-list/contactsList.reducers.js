import { injectReducer } from '@utilities/helpers';
import { actionTypes } from './contactsList.constants';

const INITIAL_STATE = {
  users: [],
};

export default injectReducer(INITIAL_STATE, {
  [actionTypes.FETCH_USERS]: (state, { payload }) => {
    return { ...state, users: payload };
  },
});
