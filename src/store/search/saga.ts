import { call, put, takeLatest, select } from 'redux-saga/effects';
import { SEARCH_ACTIVITIES, SEARCH_COUNTERPARTIES } from './action-types';
import { actionObject } from '../../utils';
import { DispatchProps } from '../../interfaces';
import { getCounterparty, getActivity } from '../selectors';
import { SET_COUNTERPARTIES_TEMP } from '../counterparty/action-types';
import { SET_ACTIVITIES_TEMP } from '../activity/action-types';

const filterRecords = (record: any, searchValue: string) => {
  const keys = Object.keys(record);  

  for(let key of keys) {
    const match = String(record[key].toLowerCase()).search(searchValue);      
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
    const { results } = yield select(getActivity);
    const currentActivities = yield call(filterResults, payload, results);

    yield put(actionObject(SET_ACTIVITIES_TEMP, currentActivities));
    
  } catch(error) {
    console.log(error);
  }
}

function* searchCounterpartiesAsync({ payload }: DispatchProps) {
  try {
    const { results } = yield select(getCounterparty);
    const currentCounterparties = yield call(filterResults, payload, results);

    yield put(actionObject(SET_COUNTERPARTIES_TEMP, currentCounterparties));
    
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
