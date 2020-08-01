import { actionObject } from "../../utils";
import { GET_ACTIVITIES } from "./action-types";

export const getActivities = () => actionObject(GET_ACTIVITIES);
