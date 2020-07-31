import { DispatchProps, UserProps } from '../../interfaces';
import { SAVE_USER } from './action-types';

type StateProps = {
  users: Array<UserProps>
}

const initialState: StateProps = {
  users: []
}

export default (state: any = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case SAVE_USER:
    return {
      users: [
        ...state.users,
        ...payload
      ]
    };

    default:
    return state;
  }
}
