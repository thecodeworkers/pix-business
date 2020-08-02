import { actionObject } from "../../utils";
import { UPDATE_MULTISEND } from "./action-types";

export const updateMultiSend = (keywords: string) => actionObject(UPDATE_MULTISEND, keywords);
