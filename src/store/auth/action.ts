import { actionObject } from '../../utils';
import { LOGIN } from './action-types';

type CredentialProps = {
  email: string
  password: string
}

export const login = (credentials: CredentialProps) => actionObject(LOGIN, credentials);
