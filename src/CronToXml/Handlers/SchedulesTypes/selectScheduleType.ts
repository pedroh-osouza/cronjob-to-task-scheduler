import { CronData } from "../../interfaces/CronData";

export function selectScheduleType(cronData: CronData)
{
    if(cronData.daysOfWeeks != '*') return 'weekly';
    if(cronData.daysOfMonths != '*' || cronData.months != '*') return 'monthly';
    if((cronData.minutes != '*' || cronData.minutes == '*') && cronData.hours == '*' && cronData.daysOfMonths == '*' && cronData.months =='*' && cronData.daysOfWeeks == '*') return 'time'
    return 'daily'
}