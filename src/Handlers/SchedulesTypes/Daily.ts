import { Hours } from "../Hours";
import { Minutes } from "../Minutes";

export class Daily
{
    static convert(minutes: string|string[], hours: string|string[])
    {
        const baseDaily = '/sc daily /ST'
        const startTimes: String[] = []
        
        if(Array.isArray(minutes) && Array.isArray(hours))
        {
            hours.forEach((hour) => {
                minutes.forEach((minute) => {
                    console.log(hour, minute)
                    startTimes.push(`${baseDaily} ${hour}:${minute}`);
                });
            });

            return startTimes;   
        }

        if(Array.isArray(minutes) && Hours.validate(hours.toString()))
        {
            minutes.forEach((value)=>{
                startTimes.push(`${baseDaily} ${hours.toString()}:${value}`)
            })

            return startTimes;
        }

        if(Minutes.validate(minutes.toString()) && Array.isArray(hours))
        {
            hours.forEach((value)=>{
                startTimes.push(`${baseDaily} ${value}:${minutes.toString()}`)
            })

            return startTimes;
        }

        if(Minutes.validate(minutes.toString()) && Hours.validate(hours.toString())) return `${baseDaily} ${hours}:${minutes}`
        
    }
}