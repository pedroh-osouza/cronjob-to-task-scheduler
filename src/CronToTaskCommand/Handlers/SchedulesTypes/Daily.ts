import { Extract } from "./Extract";

export class Daily
{
    static minuteHour(minutes: string|string[], hours: string|string[])
    {
        const baseSchedule = '/sc daily /st'
        
        let startTimes = Extract.startTime(minutes, hours);
        let schedules: string[] = [];

        if(!Array.isArray(startTimes)) return `${baseSchedule} ${startTimes}`;

        startTimes.forEach((value)=>{
            schedules.push(`${baseSchedule} ${value}`)
        })

        return schedules;
    }
}