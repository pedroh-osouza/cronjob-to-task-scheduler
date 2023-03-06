import { Hours } from "../Hours";
import { Minutes } from "../Minutes";

export class Extract
{
    static startTime(minutes: string|string[], hours:string|string[])
    {
        let startTimes: string[] = [];

        if(Array.isArray(minutes) && Array.isArray(hours))
        {
            hours.forEach((hour) => {
                minutes.forEach((minute) => {
                    console.log(hour, minute)
                    startTimes.push(`${hour}:${minute}`);
                });
            });

            return startTimes;   
        }

        if(Array.isArray(minutes) && Hours.validate(hours.toString()))
        {
            minutes.forEach((value)=>{
                startTimes.push(`${hours.toString()}:${value}`)
            })

            return startTimes;
        }

        if(Minutes.validate(minutes.toString()) && Array.isArray(hours))
        {
            hours.forEach((value)=>{
                startTimes.push(`${value}:${minutes.toString()}`)
            })

            return startTimes;
        }

        if(Minutes.validate(minutes.toString()) && Hours.validate(hours.toString())) return `${hours}:${minutes}`
    }
}