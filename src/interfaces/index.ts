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
  password: string
}
