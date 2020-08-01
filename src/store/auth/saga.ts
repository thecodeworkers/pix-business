import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchService } from '../../utils';
import { LOGIN, LOGIN_ASYNC } from './action-types';
import { actionObject } from '../../utils';

function* loginAsync() {
  try {
    yield put(actionObject(LOGIN_ASYNC, null));
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginAsync);
}
