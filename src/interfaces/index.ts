export interface DispatchProps {
  type: string
  payload: any
}

export interface UserProps {
  name: string | null
  wallet: string | null
}

export interface CommerceProps {
  name: string
  services: string | Array<string>
  years: string
  email: string
  password?: string
}

export interface BankProps {
  branchAddress: string,
  checkingAccount: string,
  routingNumber: string,
  bankName: string,
  results: Array<BankProps>
}

export interface AuthProps {
  isAuth: boolean
}

export interface WalletProps {
  address: string
  balances: Array<any>
  chain: string
  currency: string
  entityId: string
  type: string
  walletId: string
  description?: string
  wallets: Array<WalletProps>
  saving?: boolean
}

export interface CounterpartyProps {
  type: string,
  counterparty: string
  address: string
  email: string
  phone: string
}
