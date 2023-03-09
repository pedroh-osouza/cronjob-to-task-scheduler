import { CronData } from "../interfaces/CronData";

export class ScheduleType
{   
    static select(cronData: CronData){

        if(cronData.daysOfWeeks != '*') return 'weekly';
        if(cronData.daysOfMonths != '*' || cronData.months != '*') return 'monthly';
        return 'daily'
    }

    static daily(cronData: CronData)
    {

    }

    static weekly(cronData: CronData)
    {

    }

    static monthly(cronData: CronData)
    {

    }
}