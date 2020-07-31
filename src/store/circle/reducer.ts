import { DispatchProps } from '../../interfaces'
import { PING_ASYNC } from './action-types'

const initialState = {
  result: null
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case PING_ASYNC:
    return { ...payload };

    default:
    return state;
  }
}
