import { DispatchProps, AuthProps } from '../../interfaces';
import { LOGIN_ASYNC } from './action-types';

const initialState: AuthProps = {
  isAuth: false,
  commerce: null
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case LOGIN_ASYNC:
    return {
      isAuth: true,
      commerce: payload
    };

    default:
    return state;
  }
}
