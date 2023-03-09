import { Extract } from "./Extract";

export class Weekly
{
    static minuteHourDayOfWeek(minute: string|string[], hour: string|string[], dayOfWeek: string|string[])
    {
        const baseSchedule = '/sc weekly /ST'

        let startTimes = Extract.startTime(minute, hour);
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