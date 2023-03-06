import { Extract } from "./Extract";

export class Daily
{
    static handle(minutes: string|string[], hours: string|string[])
    {
        const baseDaily = '/sc daily /ST'
        
        let startTimes = Extract.startTime(minutes, hours);
        let schedules: string[] = [];

        if(!Array.isArray(startTimes)) return `${baseDaily} ${startTimes}`;

        startTimes.forEach((value)=>{
            schedules.push(`${baseDaily} ${value}`)
        })

        return schedules;
    }
}