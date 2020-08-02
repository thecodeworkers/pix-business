import { actionObject } from "../../utils";
import { UPDATE_SEND } from "./action-types";

export const updateSend = (keywords: string) => actionObject(UPDATE_SEND, keywords);
