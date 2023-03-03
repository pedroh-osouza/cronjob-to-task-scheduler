import { InvalidRangeException } from "../Exceptions/InvalidRangeException";

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

            list.forEach((value) => {
                selectedMonths.push(value);
            });

            return selectedMonths.join(' ');
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
            
            return selectedMonths.join(' ');
        }

        if(months.includes('/'))
        {
            const match = months.match(/^([*])\/([1-12])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[1-12]');

            console.log('Rule not implemented');
        }
    }
}