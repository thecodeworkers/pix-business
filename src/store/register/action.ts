import { actionObject } from '../../utils';
import { MANAGE_SERVICE } from './action-types';

export const manageService = (services: any) => actionObject(MANAGE_SERVICE, { services });
