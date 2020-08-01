import { actionObject } from '../../utils';
import { GET_WALLETS, CREATE_WALLET, GET_WALLET, CREATE_FIRST_WALLET } from './action-types';

export const getWallet = (walletId: string | number) => actionObject(GET_WALLET, walletId);
export const getWallets = () => actionObject(GET_WALLETS);
export const createWallet = () => actionObject(CREATE_WALLET, []);
export const createFirstWallet = () => actionObject(CREATE_FIRST_WALLET);
