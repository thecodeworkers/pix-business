import { DispatchProps } from '../../interfaces'
import { PING_ASYNC, TRANSFER_ASYNC, MULTI_TRANSFER_ASYNC } from './action-types'

const initialState = {
  result: null
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch (type) {
    case PING_ASYNC:
      return { ...payload };
    case TRANSFER_ASYNC:
      return { ...payload };
    case MULTI_TRANSFER_ASYNC:
      return { ...payload };

    default:
      return state;
  }
}
