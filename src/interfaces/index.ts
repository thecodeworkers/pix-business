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

export interface AuthProps {
  isAuth: boolean
  commerce: CommerceProps | null
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
  saving?: boolean
}
