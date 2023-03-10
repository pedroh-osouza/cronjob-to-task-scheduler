import { CronData } from "../../interfaces/CronData";

export class Monthly
{
    static getTrigger(cronData: CronData)
    {
        if(cronData.minutes == '*' && cronData.hours == '*' && cronData.daysOfMonths != '*' && cronData.months == '*' && cronData.daysOfWeeks == '*') return this.dayOfMonth(cronData)
    }

    private static dayOfMonth(cronData: CronData)
    {
        console.log('a')
    }
}