import { Extract } from "./Extract";

export class DailySpecificDay
{
    static handle(minutes: string|string[], hours: string|string[], dayOfWeek: string|string[])
    {
        const baseSchedule = '/sc weekly /ST'

        let startTimes = Extract.startTime(minutes, hours);
        let daysOfWeek = Extract.dayOfWeek(dayOfWeek);
        let schedules: string[] = [];
      
        if(!Array.isArray(startTimes))
        {
            return `${baseSchedule} ${startTimes} ${daysOfWeek}`
        }

        startTimes.forEach((value)=>{
            schedules.push(`${baseSchedule} ${value} ${daysOfWeek}`)
        })

        return schedules;
    }
}