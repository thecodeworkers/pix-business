import { DispatchProps } from '../../interfaces';
import { GET_ACTIVITIES, SAVE_ACTIVITY, SET_ACTIVITIES_TEMP, GET_BACKUP_ACTIVITIES } from './action-types';

const initialState: any = {
  activities: [
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
  ],
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

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case GET_ACTIVITIES:
    return state;

    case SAVE_ACTIVITY:     
    return {
      counterparties: [
        ...state.activities,
        ...payload.activity
      ],
      results: [
        ...state.activities,
        ...payload.activity
      ]
    }

    case SET_ACTIVITIES_TEMP:
    return {
      ...state,
      activities: payload
    }

    case GET_BACKUP_ACTIVITIES:
    return {
      ...state,
      activities: state.results
    }

    default:
    return state;
  }
}
