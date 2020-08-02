import { FILTER_COUNTERPARTIES, GET_BACKUP_COUNTERPARTIES } from './action-types';
import { takeLatest, select } from 'redux-saga/effects';
import { DispatchProps } from '../../interfaces';
import { getCounterparty } from '../selectors';

function* filterCounterpartiesAsync({ payload }: DispatchProps) {
  try {
    console.log(payload);
    const { results } = yield select(getCounterparty);
    console.log(results);

    // yield put(actionObject(LOGIN_ASYNC, null));
  } catch(error) {
    console.log(error);
  }
}

export function* watchfilterCounterparties() {
  yield takeLatest(FILTER_COUNTERPARTIES, filterCounterpartiesAsync);
}
