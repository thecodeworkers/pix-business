import { call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH_ACTIVITIES, SEARCH_COUNTERPARTIES, SEARCH_PRODUCTS } from './action-types';
import { actionObject } from '../../utils';
import { DispatchProps } from '../../interfaces';

const filterRecords = (record: any, searchValue: string) => {
  const keys = Object.keys(record);

  for(let key of keys) {
    const match = String(record[key]).search(searchValue);
    if(match > -1) return record;
  }
}

const filterResults = (currentValue: string, records: Array<any>) => {
  if(currentValue) {
    const results = records.filter((record) => filterRecords(record, currentValue));
    return results;
  }

  return records;
}


function* searchActivitiesAsync({ payload }: DispatchProps) {
  try {
    // yield put(actionObject(LOGIN_ASYNC, null));
    
  } catch(error) {
    console.log(error);
  }
}

function* searchCounterpartiesAsync() {
  try {
    // yield put(actionObject(LOGIN_ASYNC, null));
    
  } catch(error) {
    console.log(error);
  }
}

function* searchProductsAsync() {
  try {
    // yield put(actionObject(LOGIN_ASYNC, null));
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchSearchActivities() {
  yield takeLatest(SEARCH_ACTIVITIES, searchActivitiesAsync);
}

export function* watchSearchCounterparties() {
  yield takeLatest(SEARCH_COUNTERPARTIES, searchCounterpartiesAsync);
}

export function* watchSearchProducts() {
  yield takeLatest(SEARCH_PRODUCTS, searchProductsAsync);
}
