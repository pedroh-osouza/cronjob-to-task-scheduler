import { Extract } from "./Extract";

export class DailySpecificDay
{
    static handle(minutes: string|string[], hours: string|string[], dayOfWeek: string|string[])
    {
        const baseDaily = '/sc weekly /ST'

        let startTimes = Extract.startTime(minutes, hours);
        let daysOfWeek = Extract.dayOfWeek(dayOfWeek);
        let schedules: string[] = [];
      
        if(!Array.isArray(startTimes))
        {
            return `${baseDaily} ${startTimes} ${daysOfWeek}`
        }

        startTimes.forEach((value)=>{
            schedules.push(`${baseDaily} ${value} ${daysOfWeek}`)
        })

        return schedules;
    }
}