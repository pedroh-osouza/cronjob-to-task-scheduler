import { InvalidRangeException } from "../Exceptions/InvalidRangeException";

export class DaysOfMonth
{
    convert(cronSynstax: string){

        const daysOfMonth = cronSynstax.split(' ')[2];

        if(daysOfMonth == '*')
        {
            return '/daily'
        }

        if(daysOfMonth.includes(','))
        {
            const list = daysOfMonth.split(',');
            let days: string[] = [];

            list.forEach((value) => {
                days.push();
            });

        }

        if(daysOfMonth.includes('-'))
        {
            const match = daysOfMonth.match(/^([0-7])\-([0-7])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 0-7')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);

            let days: string[] = [];
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                days.push();
            }
            
        }

        if(daysOfMonth.includes('/'))
        {
            const match = daysOfMonth.match(/^([*])\/([0-7])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[0-7]');

            console.log('Rule not implemented');
        }
    }
}