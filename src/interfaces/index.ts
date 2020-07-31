export interface DispatchProps {
  type: string
  payload: any
}

export interface UserProps {
  name: string | null
  email: string | null
  password: string | null
  wallet: string | null
}
