import { CommerceProps, DispatchProps } from '../../interfaces';
import { CREATE_COMMERCE } from './action-types';

type StateProps = {
  commerces: Array<CommerceProps>
}

const initialState: StateProps = {
  commerces: []
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case CREATE_COMMERCE:
    return {
      commerces: [
        ...state.commerces,
        ...payload
      ]
    };

    default:
    return state;
  }
}
