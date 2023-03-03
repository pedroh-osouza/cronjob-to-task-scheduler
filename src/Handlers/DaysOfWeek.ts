import { InvalidRangeException } from '../Exceptions/InvalidRangeException';

export class DaysOfWeek
{
    static convert(cronSynstax: string)
    {   
        const daysOfWeek = cronSynstax.split(' ')[4];
        let selectedDaysOfWeek: string[] = [];

        const daysOfWeekName: { [key: string]: string} = {
            '0': 'SUN',
            '1': 'MON',
            '2': 'TUE',
            '3': 'WED',
            '4': 'THUR',
            '5': 'FRI',
            '6': 'SAT',
            '7': 'SUN'
        };

        if(daysOfWeek == '*')
        {
            return ''
        }

        if(daysOfWeek.includes(','))
        {
            const list = daysOfWeek.split(',');
            
            list.forEach((value) => {
                selectedDaysOfWeek.push(daysOfWeekName[value]);
            });

            return selectedDaysOfWeek.join(' ');
        }

        if(daysOfWeek.includes('-'))
        {
            const match = daysOfWeek.match(/^([0-7])\-([0-7])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 0-7')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedDaysOfWeek.push(daysOfWeekName[i]);
            }
            
            return selectedDaysOfWeek.join(' ');
        }

        if(daysOfWeek.includes('/'))
        {
            const match = daysOfWeek.match(/^([*])\/([0-7])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[0-7]');

            console.log('Rule not implemented');
        }
    }
}