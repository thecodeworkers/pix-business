import { actionObject } from '../../utils';
import { GET_COUNTERPARTIES, SAVE_COUNTERPARTY } from './action-types';
import { CounterpartyProps } from '../../interfaces';

export const getCounterparties = () => actionObject(GET_COUNTERPARTIES);
export const saveCounterparty = (counterparty: CounterpartyProps) => actionObject(SAVE_COUNTERPARTY, [{ counterparty }]);
