import { DispatchProps } from '../../interfaces';
import { UPDATE_SEND } from './action-types';

const initialState = {
  wallet: {},
  values: {}
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case UPDATE_SEND:
      return { ...state, ...payload }
    default:
      return state;
  }
}
