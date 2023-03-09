import { InvalidCronSyntax } from '../Exceptions/InvalidCronSyntax';
import { InvalidRangeException } from '../Exceptions/InvalidRangeException';
import { InvalidValueException } from '../Exceptions/InvalidValueException';

export class Hours
{
    static convert(cronSynstax: string)
    {
        const hours = cronSynstax.split(' ')[1];
        let selectedHours: string[] = [];

        if((hours == '*') || (/^(0?[0-9]|1[0-9]|2[0-3])$/.test(hours))) return hours;

        if(hours.includes(','))
        {
            const list = hours.split(',');
            const regex = /^(?:[0-9]|1[0-9]|2[0-3])$/;

            list.forEach((value) => {
                if(!regex.test(value)) throw new InvalidValueException(`Value: ${value} is invalid, number required is 0-23`)
                selectedHours.push(value)
            });

            return selectedHours;
        }

        if(hours.includes('-'))
        {
            const match = hours.match(/^([01]?[0-9]|2[0-3])-([01]?[0-9]|2[0-3])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 0-23')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedHours.push(i.toString());
            }
            
            return selectedHours;
        }

        if(hours.includes('/'))
        {
            const match = hours.match(/^([*])\/([0-23])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[0-23]');

            console.log('Rule not implemented');
        }

        throw new InvalidCronSyntax('Invalid Cron Syntax');
    }

    static validate(cronPart: string): Boolean
    {
        if((/^(0?[0-9]|1[0-9]|2[0-3])$/.test(cronPart))) return true;
        return false;
    }
}