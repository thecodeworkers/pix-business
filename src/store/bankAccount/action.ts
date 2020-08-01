import { actionObject } from "../../utils";
import { GET_BANK_ACCOUNT } from "./action-types";

export const getBankAccount = () => actionObject(GET_BANK_ACCOUNT);
