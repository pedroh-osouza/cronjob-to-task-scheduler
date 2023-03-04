import { InvalidRangeException } from "../Exceptions/InvalidRangeException";
import { InvalidValueException } from "../Exceptions/InvalidValueException";

export class Months
{
    static convert(cronSynstax: string)
    {
        const months = cronSynstax.split(' ')[3];
        let selectedMonths: string[] = [];

        if(months == '*')
        {
            return ''
        }

        if(months.includes(','))
        {
            const list = months.split(',');
            const regex = /^(1[0-2]|[1-9])$/;

            list.forEach((value) => {
                if(!regex.test(value)) throw new InvalidValueException(`Value: ${value} is invalid, number required is 1-12`)
                selectedMonths.push(value);
            });

            return selectedMonths;
        }

        if(months.includes('-'))
        {
            const match = months.match(/^(1[0-2]|[1-9])-(1[0-2]|[1-9])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 1-12')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedMonths.push(i.toString());
            }
            
            return selectedMonths;
        }

        if(months.includes('/'))
        {
            const match = months.match(/^([*])\/([1-12])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[1-12]');

            console.log('Rule not implemented');
        }
    }
}