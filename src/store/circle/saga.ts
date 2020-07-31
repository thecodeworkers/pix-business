import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchService } from '../../utils';
import { PING, PING_ASYNC } from './action-types';
import { ping } from '../../utils/path';
import { actionObject } from '../../utils';

function* pingAsync() {
  try {
    const result = yield call(fetchService, ping);
    yield put(actionObject(PING_ASYNC, { result }));
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchPing() {
  yield takeLatest(PING, pingAsync);
}
