import { WalletProps } from '../../../interfaces';
import { RouteComponentProps } from "@reach/router";

export interface StateProps {
  finished: any
  sendData: any
}

export interface Props extends RouteComponentProps {
  action: any
  sendData: any,
  finished: any
}
