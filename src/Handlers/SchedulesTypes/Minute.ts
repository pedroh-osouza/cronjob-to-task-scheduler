export class Minute
{
    static convert(minutes: string|string[], hours: string|string[])
    {
        const baseDaily = '/sc minute /ST'
        
        if(Array.isArray(minutes) && Array.isArray(hours))
        {
            const startTimes: String[] = []

            hours.forEach((hour) => {
                minutes.forEach((minute) => {
                    console.log(hour, minute)
                    startTimes.push(`${baseDaily} ${hour}:${minute}`);
                });
            });

            return startTimes;   
        }

        return `${baseDaily} ${hours}:${minutes}`
        
    }
}