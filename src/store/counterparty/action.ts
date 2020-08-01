import { actionObject } from "../../utils";
import { GET_COUNTERPARTIES } from "./action-types";

export const getCounterparties = () => actionObject(GET_COUNTERPARTIES);
