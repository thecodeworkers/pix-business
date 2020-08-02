import { actionObject } from '../../utils';
import { LOGIN, LOGOUT } from './action-types';

type CredentialProps = {
  email: string
  password: string
}

export const login = (credentials: CredentialProps) => actionObject(LOGIN, credentials);
export const logout = () => actionObject(LOGOUT);
