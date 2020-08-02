import { actionObject } from '../../utils';
import { GET_ACTIVITIES, GET_BACKUP_ACTIVITIES, SAVE_ACTIVITY, FILTER_ACTIVITIES } from './action-types';

export const getActivities = () => actionObject(GET_ACTIVITIES);
export const saveActivity = (activity: any) => actionObject(SAVE_ACTIVITY, { activity: [activity] });
export const getBackupActivities = () => actionObject(GET_BACKUP_ACTIVITIES);
export const filterActivities = (filter: string) => actionObject(FILTER_ACTIVITIES, filter);
