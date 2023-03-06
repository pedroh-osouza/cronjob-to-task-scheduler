
import { cronData } from "../types/cronData";
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
    }
}