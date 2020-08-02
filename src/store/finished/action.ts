import { actionObject } from "../../utils";
import { UPDATE_FINISHED } from "./action-types";

export const updateFinished = (keywords: string) => actionObject(UPDATE_FINISHED, keywords);
