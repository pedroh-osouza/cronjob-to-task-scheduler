import { InvalidRangeException } from "../Exceptions/InvalidRangeException";

export class DaysOfMonth
{
    static convert(cronSynstax: string){

        const daysOfMonth = cronSynstax.split(' ')[2];
        let selectedDaysOfMonth: string[] = [];

        if(daysOfMonth == '*')
        {
            return ''
        }

        if(daysOfMonth.includes(','))
        {
            const list = daysOfMonth.split(',');

            list.forEach((value) => {
                selectedDaysOfMonth.push(value);
            });

            return selectedDaysOfMonth.join(' ');
        }

        if(daysOfMonth.includes('-'))
        {
            const match = daysOfMonth.match(/^([1-31])\-([1-31])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 1-31')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedDaysOfMonth.push(i.toString());
            }

            return selectedDaysOfMonth.join(' ');
        }

        if(daysOfMonth.includes('/'))
        {
            const match = daysOfMonth.match(/^([*])\/([1-31])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[1-31]');

            console.log('Rule not implemented');
        }
    }
}