export class SpecificHour
{
    static handle(hour: string|string[])
    {
        const baseSchedule = '/sc minute /mo 1 /st'

        if(!Array.isArray(hour))
        {
            return `${baseSchedule} ${hour}:00 /et ${hour}:59`
        }

        let schedules: string[] = [];

        hour.forEach((value)=>{
            schedules.push(`${baseSchedule} ${value}:00 /et ${value}:59`)
        })

        return schedules;
    }
}