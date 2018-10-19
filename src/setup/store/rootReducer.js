import { combineReducers } from 'redux';
import { reducer as contactsReducer } from '@features/contacts';

export default combineReducers({
  contactsReducer,
});
