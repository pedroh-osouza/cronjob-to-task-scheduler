import { CronData } from "../interfaces/CronData";
import { Trigger } from "../interfaces/ScheduleXmlObject";

export class ScheduleType
{   
    static select(cronData: CronData){

        if(cronData.daysOfWeeks != '*') return 'weekly';
        if(cronData.daysOfMonths != '*' || cronData.months != '*') return 'monthly';
        return 'daily'
    }

    static daily(cronData: CronData): Trigger
    {
        ;
    }

    static weekly(cronData: CronData): Trigger
    {
        
    }

    static monthly(cronData: CronData): Trigger
    {
        
    }
}