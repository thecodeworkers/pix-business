import { DispatchProps, AuthProps } from '../../interfaces';
import { LOGIN_ASYNC, LOGOUT } from './action-types';

const initialState: AuthProps = {
  isAuth: false
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case LOGIN_ASYNC:
    return { isAuth: payload };

    case LOGOUT:
    return initialState;

    default:
    return state;
  }
}
