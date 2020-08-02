import { all, fork } from 'redux-saga/effects';
import { watchPing, watchTransfer, watchMultiTransfer } from './circle/saga';
import { watchLogin } from './auth/saga';
import { watchSearchActivities, watchSearchCounterparties } from './search/saga';
import { watchGetWallets, watchCreateWallet, watchCreateFirstWallet } from './wallet/saga';
import { watchfilterCounterparties } from './counterparty/saga';

export default function* () {
  yield all([
    fork(watchPing),
    fork(watchLogin),
    fork(watchSearchActivities),
    fork(watchSearchCounterparties),
    fork(watchGetWallets),
    fork(watchCreateWallet),
    fork(watchCreateFirstWallet),
    fork(watchTransfer),
    fork(watchMultiTransfer),
    fork(watchfilterCounterparties)
  ]);
}
