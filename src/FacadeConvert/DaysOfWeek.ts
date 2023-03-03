import { InvalidRangeDaysOfWeekException } from "../Exceptions/DaysOfWeek/InvalidRangeException";

export class DaysOfWeek
{
    static convert(cronSynstax: string)
    {
        const daysOfWeekName: {
            [key: string]: string;
        } = {
            '0': 'SUN',
            '1': 'MON',
            '2': 'TUE',
            '3': 'WED',
            '4': 'THUR',
            '5': 'FRI',
            '6': 'SAT',
            '7': 'SUN'
        };

        const daysOfWeek = cronSynstax.split(' ')[4];

        if(daysOfWeek == '*')
        {
            return '/daily'
        }

        if(daysOfWeek.includes(','))
        {
            const list = daysOfWeek.split(',');
            let days: string[] = [];

            list.forEach((value) => {
                days.push(daysOfWeekName[value]);
            });

            let schedule = 'daily /d ';
            schedule += days.join(' ');
        }

        if(daysOfWeek.includes('-'))
        {
            const match = daysOfWeek.match(/^([0-7])\-([0-7])$/);

            if(!match) throw new InvalidRangeDaysOfWeekException('Invalid range, correct: 0-7')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);

            let days: string[] = [];
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                days.push(daysOfWeekName[i]);
            }
            
            let schedule = 'daily /d ';
            schedule += days.join(' ');
        }

        if(daysOfWeek.includes('/'))
        {
            const match = daysOfWeek.match(/^([*])\/([0-7])$/);

            if(!match) throw new InvalidRangeDaysOfWeekException('Invalid range, correct: */[0-7]');

            console.log('Rule not implemented');
        }
    }
}