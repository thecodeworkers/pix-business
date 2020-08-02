import { DispatchProps } from '../../interfaces';
import { UPDATE_SEND } from './action-types';

const initialState = {
  result: []
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case UPDATE_SEND:
      return { ...initialState, result: payload }
    default:
      return state;
  }
}
