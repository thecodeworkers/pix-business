import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOGIN, LOGIN_ASYNC } from './action-types';
import { actionObject } from '../../utils';
import { DispatchProps } from '../../interfaces';
import { getCommerce } from '../selectors';

function* loginAsync({ payload }: DispatchProps) {
  try {
    const commerces = yield select(getCommerce);
    const { commerce } = commerces;

    if(commerce.email == payload.email && commerce.password == payload.password) {
      yield put(actionObject(LOGIN_ASYNC, true));
    }

    throw 'Credentials errors';
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginAsync);
}
