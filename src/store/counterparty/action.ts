import { actionObject } from '../../utils';
import { GET_COUNTERPARTIES } from './action-types';
import { CounterpartyProps } from '../../interfaces';

export const getCounterparties = (counterparty: CounterpartyProps) => actionObject(GET_COUNTERPARTIES, [{ counterparty }]);
