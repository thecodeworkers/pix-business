import { DispatchProps } from '../../interfaces';
import { GET_COUNTERPARTIES, SAVE_COUNTERPARTY } from './action-types';

const initialState: any = {
  counterparties: [
    {
      'type': 'Employee',
      'counterparty': 'Darianna medina',
      'address': '0xdwdd8u.....',
      'email': 'Darianna@gmail.com',
      'phone': '+58-414332982'
    },
    {
      'type': 'Employee',
      'counterparty': 'Darianna medina',
      'address': '0xdwdd8u.....',
      'email': 'Darianna@gmail.com',
      'phone': '+58-414332982'
    },
    {
      'type': 'Employee',
      'counterparty': 'Darianna medina',
      'address': '0xdwdd8u.....',
      'email': 'Darianna@gmail.com',
      'phone': '+58-414332982'
    },
    {
      'type': 'Employee',
      'counterparty': 'Darianna medina',
      'address': '0xdwdd8u.....',
      'email': 'Darianna@gmail.com',
      'phone': '+58-414332982'
    },
    {
      'type': 'Employee',
      'counterparty': 'Darianna medina',
      'address': '0xdwdd8u.....',
      'email': 'Darianna@gmail.com',
      'phone': '+58-414332982'
    },
    {
      'type': 'Employee',
      'counterparty': 'Darianna medina',
      'address': '0xdwdd8u.....',
      'email': 'Darianna@gmail.com',
      'phone': '+58-414332982'
    },
  ]
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case GET_COUNTERPARTIES:
    return state;

    case SAVE_COUNTERPARTY:
    return {
      results: [
        ...state.counterparties,
        ...payload.counterparty
      ]
    }

    default:
    return state;
  }
}
