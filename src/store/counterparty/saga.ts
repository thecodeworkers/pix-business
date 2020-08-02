import { FILTER_COUNTERPARTIES, GET_BACKUP_COUNTERPARTIES, SET_COUNTERPARTIES_TEMP } from './action-types';
import { takeLatest, select, put } from 'redux-saga/effects';
import { DispatchProps } from '../../interfaces';
import { getCounterparty } from '../selectors';
import { actionObject } from '../../utils';

function* filterCounterpartiesAsync({ payload }: DispatchProps) {
  try {
    const { results } = yield select(getCounterparty);
    let currentValues = results;

    if(payload != 'all') {
      currentValues = results.filter((result: any) => result.type.toLowerCase() == payload);
    }

    yield put(actionObject(SET_COUNTERPARTIES_TEMP, currentValues));
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchfilterCounterparties() {
  yield takeLatest(FILTER_COUNTERPARTIES, filterCounterpartiesAsync);
}
