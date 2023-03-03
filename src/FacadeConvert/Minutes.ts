import { InvalidRangeException } from "../Exceptions/Minutes/InvalidRangeException";

export class Minutes
{
    static convert(cronSynstax: string): string | string[]
    {
        const minutes = cronSynstax.split(' ')[0];

        if(minutes == '*')
        {
            return '/minute /mo 1'
        }

        if(this.isValidMinute(minutes))
        {
            
        }

        if(minutes.includes(','))
        {
            let list = minutes.split(',')
            list.forEach(minute => {
                
            });
            return '';
        }

        if(minutes.includes('-'))
        {
            const regex = new RegExp('\d{2}-\d{2}')
            if(!regex.test(minutes)) throw new InvalidRangeException('Minutes Range is Invalid')
            return '';
        }

        if(minutes.includes('//'))
        {
            return '';
        }

        return '';
    }

    static isValidMinute(str: string): boolean {
        const num = parseInt(str);
        return !isNaN(num) && num >= 0 && num <= 59;
    }
}

