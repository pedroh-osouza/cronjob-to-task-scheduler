import { InvalidCronSyntax } from "../Exceptions/InvalidCronSyntax";
import { InvalidRangeException } from "../Exceptions/InvalidRangeException";
import { InvalidValueException } from "../Exceptions/InvalidValueException";

export class DaysOfMonth
{
    static convert(cronSynstax: string){

        const daysOfMonth = cronSynstax.split(' ')[2];
        let selectedDaysOfMonth: string[] = [];

        if((daysOfMonth == '*') || (/^([1-9]|[12]\d|3[01])$/.test(daysOfMonth))) return daysOfMonth

        if(daysOfMonth.includes(','))
        {
            const regex = /^(?:[1-9]|[1-2][0-9]|3[0-1])$/;

            const list = daysOfMonth.split(',');

            list.forEach((value) => {
                if(!regex.test(value)) throw new InvalidValueException(`Value: ${value} is invalid, number required is 1-31`)
                selectedDaysOfMonth.push(value);
            });

            return selectedDaysOfMonth;
        }

        if(daysOfMonth.includes('-'))
        {
            const match = daysOfMonth.match(/^([1-9]|[12][0-9]|3[01])\D+([1-9]|[12][0-9]|3[01])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 1-31')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedDaysOfMonth.push(i.toString());
            }

            return selectedDaysOfMonth;
        }

        if(daysOfMonth.includes('/'))
        {
            const match = daysOfMonth.match(/^([*])\/([1-31])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[1-31]');

            console.log('Rule not implemented');
        }

        throw new InvalidCronSyntax('Invalid Cron Syntax');
    }

    static validate(cronPart: string): Boolean
    {
        if((/^([1-9]|[12]\d|3[01])$/.test(cronPart))) return true;
        return false;
    }
}