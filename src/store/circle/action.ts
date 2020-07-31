import { actionObject } from '../../utils/common';
import { PING } from './action-types';

export const ping = () => actionObject(PING);
