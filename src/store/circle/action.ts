import { actionObject } from '../../utils/common';
import { PING, TRANSFER, MULTI_TRANSFER } from './action-types';

export const ping = () => actionObject(PING);

export const transfer = (data: any) => actionObject(TRANSFER, data);

export const multiTransfer = (data: any) => actionObject(MULTI_TRANSFER, data);

