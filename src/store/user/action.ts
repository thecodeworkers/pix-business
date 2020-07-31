import { actionObject } from '../../utils/common';
import { GET_USER } from './action-types';

export const getUser = () => actionObject(GET_USER);
