import { call, put, takeLatest, select } from 'redux-saga/effects';
import { fetchService } from '../../utils';
import { LOGIN, LOGIN_ASYNC } from './action-types';
import { actionObject } from '../../utils';
import { DispatchProps } from '../../interfaces';
import { getCommerce } from '../selectors';

function* loginAsync({ payload }: DispatchProps) {
  try {
    const commerce = yield select(getCommerce);
    console.log(payload);
    
    // yield put(actionObject(LOGIN_ASYNC));
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginAsync);
}
