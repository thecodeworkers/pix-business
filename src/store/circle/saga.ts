import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchService } from '../../utils';
import { PING } from './action-types';
import { ping } from '../../utils/path';

function* pingAsync() {
  try {
    const response = yield call(fetchService, ping);
    console.log(response);
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchPing() {
  yield takeLatest(PING, pingAsync);
}
