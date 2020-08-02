import { actionObject } from '../../utils';
import { SEARCH_ACTIVITIES, SEARCH_COUNTERPARTIES } from './action-types';

export const searchActivities = (keywords: string) => actionObject(SEARCH_ACTIVITIES, keywords);
export const searchCounterparties = (keywords: string) => actionObject(SEARCH_COUNTERPARTIES, keywords);
