import { DispatchProps, WalletProps } from '../../interfaces';
import { GET_WALLETS_ASYNC, CREATE_WALLET_ASYNC } from './action-types';

type StateProps = {
  wallets: Array<WalletProps>
}

const initialState: StateProps = {
  wallets : []
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case GET_WALLETS_ASYNC:
    return { ...payload };

    case CREATE_WALLET_ASYNC:
    return {
      wallets: [
        ...state.wallets,
        ...payload.wallet
      ]
    }

    default:
    return state;
  }
}
