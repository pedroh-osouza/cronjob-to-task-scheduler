import { CronData } from "../../interfaces/CronData";

export class Weekly
{
    static getTrigger(cronData: CronData)
    {
        if(cronData.minutes != '*' && cronData.hours != '*') return this.minuteHour(cronData);
        if(cronData.minutes != '*' && cronData.hours == '*') return this.minute(cronData);
        if(cronData.minutes == '*' && cronData.hours != '*') return this.hour(cronData);
    }

    private static minute(cronData: CronData)
    {
        
    }
    private static hour(cronData: CronData)
    {

    }
    private static minuteHour(cronData: CronData)
    {
        
    }
}