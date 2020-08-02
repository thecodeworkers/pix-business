
import { DispatchProps } from '../../interfaces';
import { CREATE_PRODUCT } from './action-types';


const initialState: any = {
  products : []
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case CREATE_PRODUCT:
    return {
      products: [
        ...state.producs,
        ...payload.produc
      ]
    }

    default:
    return state;
  }
}
