import { actionObject } from '../../utils';
import { CREATE_COMMERCE } from './action-types';
import { CommerceProps } from '../../interfaces';

export const createCommerce = (commerce: CommerceProps) => actionObject(CREATE_COMMERCE, commerce);
