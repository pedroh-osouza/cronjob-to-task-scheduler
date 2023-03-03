import { InvalidRangeException } from '../Exceptions/InvalidRangeException';

export class Minutes
{
    static convert(cronSynstax: string): string | string[]
    {
        const minutes = cronSynstax.split(' ')[0];
        let selectedMinutes: string[] = [];

        if(minutes == '*')
        {
            return ''
        }

        if(minutes.includes(','))
        {
            const list = minutes.split(',');

            list.forEach(value => {
                selectedMinutes.push(value);
            });

            return selectedMinutes;
        }

        if(minutes.includes('-'))
        {
            const match = minutes.match(/^([0-9]|[1-5][0-9])-([0-9]|[1-5][0-9])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: 0-59')

            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
        
            for(let i = firstNumber; i <= secondNumber; i++)
            {
                selectedMinutes.push(i.toString());
            }

            return selectedMinutes;
        }

        if(minutes.includes('/'))
        {
            const match = minutes.match(/^([*])\/([0-59])$/);

            if(!match) throw new InvalidRangeException('Invalid range, correct: */[0-59]');

            console.log('Rule not implemented');
        }

        return [''];
    }
}

