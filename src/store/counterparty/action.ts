import { actionObject } from '../../utils';
import { GET_COUNTERPARTIES, SAVE_COUNTERPARTY, GET_BACKUP_COUNTERPARTIES, FILTER_COUNTERPARTIES } from './action-types';
import { CounterpartyProps } from '../../interfaces';

export const getCounterparties = () => actionObject(GET_COUNTERPARTIES);
export const saveCounterparty = (counterparty: CounterpartyProps) => actionObject(SAVE_COUNTERPARTY, { counterparty: [counterparty] });
export const getBackupCounterparties = () => actionObject(GET_BACKUP_COUNTERPARTIES);
export const filterCounterparties = (filter: string) => actionObject(FILTER_COUNTERPARTIES, filter);
