import { WalletProps, BankProps } from "../../../../interfaces";
import { RouteComponentProps } from "@reach/router";

export interface StateProps {
  wallet: WalletProps,
  bankAccount: BankProps
}

export interface Props extends RouteComponentProps {
  action: any
  wallet: WalletProps
  bankAccount: BankProps
}
