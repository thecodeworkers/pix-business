import { DispatchProps } from '../../interfaces';
import { GET_COUNTERPARTIES, SAVE_COUNTERPARTY, SET_COUNTERPARTIES_TEMP, GET_BACKUP_COUNTERPARTIES, FILTER_COUNTERPARTIES } from './action-types';

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
      'counterparty': 'Andreucha',
      'address': '0xdwdd8u.....',
      'email': 'andreucha@gmail.com',
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
  ],
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
      'counterparty': 'Andreucha',
      'address': '0xdwdd8u.....',
      'email': 'andreucha@gmail.com',
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
      counterparties: [
        ...state.counterparties,
        ...payload.counterparty
      ],
      results: [
        ...state.counterparties,
        ...payload.counterparty
      ]
    }

    case SET_COUNTERPARTIES_TEMP:
    return {
      ...state,
      counterparties: payload
    }

    case GET_BACKUP_COUNTERPARTIES:
    return {
      ...state,
      counterparties: state.results
    }

    default:
    return state;
  }
}
