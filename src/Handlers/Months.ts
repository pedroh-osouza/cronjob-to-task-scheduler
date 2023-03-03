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
        }

        if(months.includes('-'))
        {
            const match = months.match(/^([1-12])\-([1-12])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 1-12')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedMonths.push(i.toString());
            }
        }

        if(months.includes('/'))
        {
            const match = months.match(/^([*])\/([1-12])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[1-12]');

            console.log('Rule not implemented');
        }
    }
}