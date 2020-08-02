import { WalletProps } from "../../../../interfaces";
import { RouteComponentProps } from "@reach/router";

export interface StateProps {
  wallet: WalletProps
  multiSend: any
}

export interface Props extends RouteComponentProps {
  action: any
  wallet: WalletProps
  multiSend: any
}

