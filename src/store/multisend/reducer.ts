import { DispatchProps } from '../../interfaces';
import { UPDATE_MULTISEND } from './action-types';

const initialState = {
  result: []
}

export default (state = initialState, { type }: DispatchProps) => {
  switch (type) {
    case UPDATE_MULTISEND:
      return { ...initialState, ...state }
    default:
      return state;
  }
}
