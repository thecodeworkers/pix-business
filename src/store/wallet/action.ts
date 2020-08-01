import { actionObject } from '../../utils';
import { GET_WALLETS, CREATE_WALLET } from './action-types';

export const getWallets = () => actionObject(GET_WALLETS);
export const createWallet = () => actionObject(CREATE_WALLET, []);
