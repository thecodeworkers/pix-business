import { actionObject } from '../../utils';
import { DECIDE_NAVIGATION } from './action-types';

export const decideNavigation = (isNav: boolean = true) => actionObject(DECIDE_NAVIGATION, { isNav });
