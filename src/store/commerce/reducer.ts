import { CommerceProps, DispatchProps } from '../../interfaces';
import { CREATE_COMMERCE } from './action-types';

type StateProps = {
  commerce: CommerceProps | null
}

const initialState: StateProps = {
  commerce: null
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case CREATE_COMMERCE:
    return { ...payload };

    default:
    return state;
  }
}
