import { all, fork } from 'redux-saga/effects';
import { watchPing } from './circle/saga';
import { watchLogin } from './auth/saga';
import { watchSearchActivities, watchSearchCounterparties, watchSearchProducts } from './search/saga';
import { watchGetWallets, watchCreateWallet } from './wallet/saga';

export default function* () {
  yield all([
    fork(watchPing),
    fork(watchLogin),
    fork(watchSearchActivities),
    fork(watchSearchCounterparties),
    fork(watchSearchProducts),
    fork(watchGetWallets),
    fork(watchCreateWallet)
  ]);
}
