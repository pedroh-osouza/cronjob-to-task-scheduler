import { cronData } from "../types/cronData";
import { Minutes } from "./Minutes";

export class StartTime
{
    static convert(data: cronData)
    {
        const {minutes, hours} = data;

        if(Array.isArray(minutes) && Array.isArray(hours))
        {

        }

        if(minutes == '*' && hours != '*')
        {

        }

        if(minutes != '*' && hours == '*')
        {
            
        }

        if(Minutes.validate(minutes) && hours != '*')
        {
            return `${hours}:${minutes}`
        }        
    }
}