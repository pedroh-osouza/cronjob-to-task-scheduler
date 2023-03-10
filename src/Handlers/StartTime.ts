import moment from 'moment';

export class StartTime
{
    static convert(minutes: string|string[], hours:string|string[])
    {
        let startTimes = this.hourMinuteToStartTime(minutes, hours);
        return this.startTimesToDate(startTimes);
    }

    private static hourMinuteToStartTime(minutes: string|string[], hours:string|string[]): string[]|string
    {
        let startTimes: string[] = [];

        if(Array.isArray(minutes) && Array.isArray(hours))
        {
            hours.forEach((hour) => {
                minutes.forEach((minute) => {
                    startTimes.push(`${hour}:${minute}`);
                });
            });

            return startTimes;   
        }

        if(Array.isArray(minutes) && !Array.isArray(hours))
        {
            minutes.forEach((value)=>{
                startTimes.push(`${hours.toString()}:${value}`)
            })

            return startTimes;
        }

        if(!Array.isArray(minutes) && Array.isArray(hours))
        {
            hours.forEach((value)=>{
                startTimes.push(`${value}:${minutes.toString()}`)
            })

            return startTimes;
        }

        return `${hours}:${minutes}`;
    }

    private static startTimesToDate(startTimes: string|string[])
    {
        const now = moment();
        let dates: string[] = [];

        if(!Array.isArray(startTimes))
        {
            const [hour, minute] = startTimes.split(':');
            now.set({minute: Number(minute), hour: Number(hour), second: 0});
            return now.format('YYYY-MM-DDTHH:mm:ssZ');
        }

        for(let i = 0; i < startTimes.length; i++)
        {
            const [hour, minute] = startTimes[i].split(':');
            now.set({minute: Number(minute), hour: Number(hour), second: 0});
            dates.push(now.format('YYYY-MM-DDTHH:mm:ssZ'));
        }

        return dates;
    }
}