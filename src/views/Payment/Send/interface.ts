import { WalletProps } from '../../../interfaces';
import { RouteComponentProps } from "@reach/router";

export interface StateProps {
  wallet: WalletProps
  bankAccount: any,
  counterparty: any,
  sendData: any
}

export interface Props extends RouteComponentProps {
  action: any
  wallet: WalletProps
  bankAccount: any,
  counterparty: any,
  sendData: any
}
