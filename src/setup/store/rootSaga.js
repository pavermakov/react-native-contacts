import { all, spawn } from 'redux-saga/effects';
import { contactsListSagas } from '@features/contacts-list';

function* rootSaga() {
  yield all([
    spawn(contactsListSagas),
  ]);
}

export default rootSaga;
