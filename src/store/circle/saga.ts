import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchService } from '../../utils';
import { PING, PING_ASYNC, TRANSFER_ASYNC, MULTI_TRANSFER_ASYNC, TRANSFER } from './action-types';
import { ping, transfers } from '../../utils/path';
import { actionObject } from '../../utils';

function* pingAsync() {
  try {
    const result = yield call(fetchService, ping);
    yield put(actionObject(PING_ASYNC, { result }));

  } catch (error) {
    console.log(error);
  }
}

function* TransferAsync({ payload }: any) {
  try {

    const sent = {
      destination: {
        type: 'blockchain',
        address: payload.address,
        chain: 'ETH',
      },
      amount: payload.amount,
      currency: 'USD'
    }
    const result = yield call(fetchService, transfers, "POST", sent);
    yield put(actionObject(TRANSFER_ASYNC, { result }));

  } catch (error) {
    console.log(error);
  }
}

function* MultiTransferAsync({ payload }: any) {
  try {

    let results: any = [];

    let value: any;

    for (value in payload) {
      const sent = {
        destination: {
          type: 'blockchain',
          address: value.address,
          chain: 'ETH',
        },
        amount: value.amount,
        currency: 'USD'
      }
      const result = yield call(fetchService, transfers, "POST", sent);
      results.push(result);
    }


    yield put(actionObject(MULTI_TRANSFER_ASYNC, { results }));

  } catch (error) {
    console.log(error);
  }
}

export function* watchPing() {
  yield takeLatest(PING, pingAsync);
}

export function* watchTransfer() {
  yield takeLatest(TRANSFER, TransferAsync);
}

export function* watchMultiTransfer() {
  yield takeLatest(TRANSFER, MultiTransferAsync);
}
