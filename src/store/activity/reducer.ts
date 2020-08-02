import { DispatchProps } from '../../interfaces';
import { GET_ACTIVITIES } from './action-types';

const initialState: any = {
  results: [
    {
      'status': 'sent',
      'account': 'Checking',
      'date': '12/05/20',
      'counterparty': 'Income',
      'type': 'Deposit',
      'address': '0xDadlsjf',
      'amount': 66.22,
      balance: 0.00000
    },
    {
      'status': 'sent',
      'account': 'Checking',
      'date': '12/05/20',
      'counterparty': 'Income',
      'type': 'Deposit',
      'address': '0xDadlsjf',
      'amount': 66.22,
      balance: 0.00000
    },
    {
      'status': 'sent',
      'account': 'Checking',
      'date': '12/05/20',
      'counterparty': 'Income',
      'type': 'Deposit',
      'address': '0xDadlsjf',
      'amount': 66.22,
      balance: 0.00000
    },
    {
      'status': 'sent',
      'account': 'Checking',
      'date': '12/05/20',
      'counterparty': 'Income',
      'type': 'Deposit',
      'address': '0xDadlsjf',
      'amount': 66.22,
      balance: 0.00000
    }
  ]
}

export default (state = initialState, { type }: DispatchProps) => {
  switch(type) {
    case GET_ACTIVITIES:
    return state;

    default:
    return state;
  }
}
