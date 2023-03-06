import { InvalidCronSyntax } from '../Exceptions/InvalidCronSyntax';
import { InvalidRangeException } from '../Exceptions/InvalidRangeException';
import { InvalidValueException } from '../Exceptions/InvalidValueException';

export class Minutes
{
    static convert(cronSynstax: string): string | string[]
    {
        const minutes = cronSynstax.split(' ')[0];
        let selectedMinutes: string[] = [];

        if((minutes == '*') || (/^([0-5][0-9])$/.test(minutes))) return minutes

        if(minutes.includes(','))
        {   
            const list = minutes.split(',');
            const regex = /^(?:[0-9]|[1-5][0-9])$/;

            list.forEach(value => {
                if(!regex.test(value)) throw new InvalidValueException(`Value: ${value} is invalid, number required is 0-59`)
                selectedMinutes.push(value);
            });

            return selectedMinutes;
        }

        if(minutes.includes('-'))
        {
            const match = minutes.match(/^([0-9]|[1-5][0-9])-([0-9]|[1-5][0-9])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 0-59')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedMinutes.push(i.toString());
            }

            return selectedMinutes;
        }

        if(minutes.includes('/'))
        {
            const match = minutes.match(/^([*])\/([0-59])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[0-59]');

            console.log('Rule not implemented');
        }

        throw new InvalidCronSyntax('Invalid Cron Syntax');
    }

    static validate(minutes: string): Boolean
    {
        if(/^([0-5][0-9])$/.test(minutes)) return true;
        return false;
    }
}

