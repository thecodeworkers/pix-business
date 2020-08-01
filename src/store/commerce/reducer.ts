import { CommerceProps, DispatchProps } from '../../interfaces';
import { CREATE_COMMERCE } from './action-types';

type StateProps = {
  commerce: CommerceProps | null,
  wallets: any
}

const initialState: StateProps = {
  commerce: null,
  wallets: null
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case CREATE_COMMERCE:
      console.log(payload);
    return {
      ...payload
    };

    default:
    return state;
  }
}
