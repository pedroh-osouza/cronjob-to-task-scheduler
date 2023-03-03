import { InvalidRangeException } from '../Exceptions/InvalidRangeException';

export class Hours
{
    static convert(cronSynstax: string)
    {
        const hours = cronSynstax.split(' ')[1];
        let selectedHours: string[] = [];

        if(hours == '*')
        {
            return ''
        }

        if(hours.includes(','))
        {
            const list = hours.split(',');

            list.forEach((value) => {
                selectedHours.push(value)
            });

            return selectedHours.join(' ');
        }

        if(hours.includes('-'))
        {
            const match = hours.match(/^([0-23])\-([0-23])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 0-23')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedHours.push(i.toString());
            }
            
            return selectedHours.join(' ');
        }

        if(hours.includes('/'))
        {
            const match = hours.match(/^([*])\/([0-23])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[0-23]');

            console.log('Rule not implemented');
        }
    }
}