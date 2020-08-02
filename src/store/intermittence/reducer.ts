import { DispatchProps } from '../../interfaces';
import { DECIDE_NAVIGATION } from './action-types';

const initialState: any = {
  isNav: true
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case DECIDE_NAVIGATION:
    return { ...state, ...payload };

    default:
    return state;
  }
}
