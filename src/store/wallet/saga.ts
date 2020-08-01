import { call, put, takeLatest, all } from 'redux-saga/effects';
import { CREATE_WALLET, CREATE_WALLET_ASYNC, GET_WALLETS, GET_WALLETS_ASYNC, CREATE_FIRST_WALLET } from './action-types';
import { actionObject, fetchService } from '../../utils';
import { wallets } from '../../utils/path';
import { v4 as uuidv4 } from 'uuid';

function* getDepositAddress(wallet: any) {
    const { data } = yield call(fetchService, `${wallets}/${wallet.walletId}/addresses`, 'GET', null, true);
    const addresses = data[0];

    return {
      ...wallet,
      ...addresses
    }
}

function* createAddresses(wallet: any) {
  const addressParams = {
    idempotencyKey: uuidv4(),
    currency: 'USD',
    chain: 'ETH'
  }

  const { data } = yield call(fetchService, `${wallets}/${wallet.walletId}/addresses`, 'POST', addressParams, true);

  const walletAndAddress = {
    ...wallet,
    ...data
  }

  return walletAndAddress;
}

function* getWalletsAsync() {
  try {
    const { data } = yield call(fetchService, wallets, 'GET', null, true);
    const depositAddress = yield all(data.map(getDepositAddress));

    const payload = {
      wallets: depositAddress
    }

    yield put(actionObject(GET_WALLETS_ASYNC, payload));
    
  } catch(error) {
    console.log(error);
  }
}

function* createWalletAsync() {
  try {
    const params = {
      idempotencyKey: uuidv4()
    };

    const wallet = yield call(fetchService, wallets, 'POST', params, true);
    const realWallet = yield call(createAddresses, wallet.data);
    
    yield put(actionObject(CREATE_WALLET_ASYNC, { wallet: [realWallet] } ));
    
  } catch(error) {
    console.log(error);
  }
}

function* createFirstWalletAsync() {
  try {
    const { data } = yield call(fetchService, wallets, 'GET', null, true);
    const realWallet = yield call(createAddresses, data[0]);
    
    yield put(actionObject(CREATE_WALLET_ASYNC, { wallet: [realWallet] } ));
    
  } catch(error) {
    console.log(error);
  }
}

export function* watchGetWallets() {
  yield takeLatest(GET_WALLETS, getWalletsAsync);
}

export function* watchCreateWallet() {
  yield takeLatest(CREATE_WALLET, createWalletAsync);
}

export function* watchCreateFirstWallet() {
  yield takeLatest(CREATE_FIRST_WALLET, createFirstWalletAsync);
}
