import { call, put, takeLatest, select } from 'redux-saga/effects';
import { LOGIN, LOGIN_ASYNC } from './action-types';
import { actionObject } from '../../utils';
import { DispatchProps } from '../../interfaces';
import { getCommerce } from '../selectors';
import Swal from 'sweetalert2';


function* loginAsync({ payload }: DispatchProps) {
  try {
    const commerces = yield select(getCommerce);
    const { commerce } = commerces;

    if(commerce.email == payload.email && commerce.password == payload.password) {
      yield put(actionObject(LOGIN_ASYNC, true));
      return ;
    }

    throw 'Credentials errors';
    
  } catch(error) {
    console.log(error);
    
    Swal.fire({
      title: 'Ups!',
      text: error,
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginAsync);
}
