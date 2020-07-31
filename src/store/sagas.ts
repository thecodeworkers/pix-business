import { all, fork } from 'redux-saga/effects';
import { watchPing } from './circle/saga';

export default function* () {
  yield all([
    fork(watchPing)
  ]);
}
