import { DispatchProps } from '../../interfaces';
import { GET_BANK_ACCOUNT } from './action-types';

const initialState: any = {
  results: [
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

export default (state = initialState, { type }: DispatchProps) => {
  switch(type) {
    case GET_BANK_ACCOUNT:
    return state;

    default:
    return state;
  }
}
