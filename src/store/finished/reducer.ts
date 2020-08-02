import { DispatchProps } from '../../interfaces';
import { UPDATE_FINISHED } from './action-types';

const initialState = {
  to: '',
  amount: '',
  data: {
    Amount: 0,
    Fee: 0,
    Total: 0,
  },
  dataArray: [],
  array: false
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case UPDATE_FINISHED:
      return { ...initialState, ...payload }
    default:
      return state;
  }
}
