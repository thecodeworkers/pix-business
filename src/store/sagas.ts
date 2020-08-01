import { all, fork } from 'redux-saga/effects';
import { watchPing } from './circle/saga';
import { watchLogin } from './auth/saga';

export default function* () {
  yield all([
    fork(watchPing),
    fork(watchLogin)
  ]);
}
