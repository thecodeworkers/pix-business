import { WalletProps } from "../../../../interfaces";
import { RouteComponentProps } from "@reach/router";

export interface StateProps {
  wallet: WalletProps
}

export interface Props extends RouteComponentProps {
  action: any
  wallet: WalletProps
}

