import { actionObject } from "../../utils";
import { GET_BANK_ACCOUNT, SAVE_BANK_ACCOUNT } from "./action-types";

export const getBankAccount = () => actionObject(GET_BANK_ACCOUNT);
export const saveBankAccount = (bankAccount: any) => actionObject(SAVE_BANK_ACCOUNT, { bankAccount: [bankAccount] });