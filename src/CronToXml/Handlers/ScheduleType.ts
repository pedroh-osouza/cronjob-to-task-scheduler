import { CronData } from "../interfaces/CronData";

export class ScheduleType
{   
    select(cronData: CronData){

        if(cronData.daysOfMonths != '*' || cronData.months != '*') return 'Day';
        if(cronData.daysOfWeeks != '*') return 'Weekly';
    }
}