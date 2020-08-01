import { actionObject } from "../../utils";
import { SEARCH_ACTIVITIES, SEARCH_COUNTERPARTIES, SEARCH_PRODUCTS } from "./action-types";

export const searchActivities = (keywords: string) => actionObject(SEARCH_ACTIVITIES, keywords);
export const searchCounterparties = (keywords: string) => actionObject(SEARCH_COUNTERPARTIES, keywords);
export const searchProducts = (keywords: string) => actionObject(SEARCH_PRODUCTS, keywords);
