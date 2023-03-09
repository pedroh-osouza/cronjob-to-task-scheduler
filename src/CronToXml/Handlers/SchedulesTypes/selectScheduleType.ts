import { CronData } from "../../interfaces/CronData";

export function selectScheduleType(cronData: CronData)
{
    if(cronData.daysOfWeeks != '*') return 'weekly';
    if(cronData.daysOfMonths != '*' || cronData.months != '*') return 'monthly';
    return 'daily'
}