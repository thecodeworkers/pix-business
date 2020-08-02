import { DispatchProps } from '../../interfaces';
import { UPDATE_MULTISEND } from './action-types';

const initialState = {
  result: []
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case UPDATE_MULTISEND:
      return { ...initialState, result: payload }
    default:
      return state;
  }
}
