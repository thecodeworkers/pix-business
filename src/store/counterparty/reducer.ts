import { DispatchProps } from '../../interfaces';
import { GET_COUNTERPARTIES } from './action-types';

const initialState: any = {
  results: [
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

export default (state = initialState, { type }: DispatchProps) => {
  switch(type) {
    case GET_COUNTERPARTIES:
    return state;

    default:
    return state;
  }
}
