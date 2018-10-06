import { call, put, takeLatest, all, spawn } from 'redux-saga/effects';
import types from './actionTypes';
import * as usersApi from '../api';

function* fetchUsers() {
  let payload = {};

  try {
    payload.users = yield call(usersApi.fetchUsers);
    yield put({ type: types.FETCH_USERS.SUCCESS, payload });

  } catch (error) {
    payload.error = error;
    yield put({ type: types.FETCH_USERS.FAILURE, payload });
  }
}

function* watchFetchUsers() {
  yield takeLatest(types.FETCH_USERS.REQUEST, fetchUsers);
}

export default function* contactsListSagas() {
  yield all([
    spawn(watchFetchUsers)
  ]);
}
