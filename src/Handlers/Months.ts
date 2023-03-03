import { InvalidRangeException } from "../Exceptions/InvalidRangeException";

export class Months
{
    static convert(cronSynstax: string)
    {
        const months = cronSynstax.split(' ')[3];

        if(months == '*')
        {
            return '/daily'
        }

        if(months.includes(','))
        {
            const list = months.split(',');
            let days: string[] = [];

            list.forEach((value) => {
                days.push();
            });

        }

        if(months.includes('-'))
        {
            const match = months.match(/^([0-7])\-([0-7])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 0-7')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);

            let days: string[] = [];
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                days.push();
            }
            
        }

        if(months.includes('/'))
        {
            const match = months.match(/^([*])\/([0-7])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[0-7]');

            console.log('Rule not implemented');
        }
    }
}