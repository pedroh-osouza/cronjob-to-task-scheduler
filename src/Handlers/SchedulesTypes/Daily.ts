import { Extract } from "./Extract";

export class Daily
{
    static handle(minutes: string|string[], hours: string|string[])
    {
        const baseDaily = '/sc daily /ST'
        
        let startTimes = Extract.startTime(minutes, hours);
        let sc: string[] = [];

        if(!Array.isArray(startTimes)) return `${baseDaily} ${startTimes}`;

        startTimes.forEach((value)=>{
            sc.push(`${baseDaily} ${value}`)
        })

        return sc;
    }
}