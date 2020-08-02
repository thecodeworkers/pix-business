import { DispatchProps } from '../../interfaces';
import { GET_BANK_ACCOUNT, SAVE_BANK_ACCOUNT } from './action-types';

const initialState: any = {
  bankAccounts: [
    {
      branchAddress: '80 SW 8th St, Suite 100, Miami, FL, 33130',
      checkingAccount: ' 609501090',
      routingNumber: '021000021',
      bankName: 'Chase',
    },
    {
      branchAddress: '80 SW 8th St, Suite 100, Miami, FL, 33130',
      checkingAccount: ' 609501090',
      routingNumber: '021000021',
      bankName: 'Chase',
    },
    {
      branchAddress: '80 SW 8th St, Suite 100, Miami, FL, 33130',
      checkingAccount: ' 609501090',
      routingNumber: '021000021',
      bankName: 'Chase',
    },
    {
      branchAddress: '80 SW 8th St, Suite 100, Miami, FL, 33130',
      checkingAccount: ' 609501090',
      routingNumber: '021000021',
      bankName: 'Chase',
    },
    {
      branchAddress: '80 SW 8th St, Suite 100, Miami, FL, 33130',
      checkingAccount: ' 609501090',
      routingNumber: '021000021',
      bankName: 'Chase',
    },
  ]
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case GET_BANK_ACCOUNT:
    return state;

    case SAVE_BANK_ACCOUNT:
      console.log(payload);
    return {
      bankAccounts: [
        ...state.bankAccounts,
        ...payload.bankAccount
      ],
    };

    default:
    return state;
  }
}
