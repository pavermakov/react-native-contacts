import { combineReducers } from 'redux';
import { reducer as contactsListReducer } from '@features/contacts-list';

export default combineReducers({
  contactsListReducer,
});
