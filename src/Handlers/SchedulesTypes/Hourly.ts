export class Hourly
{
    static minute(minutes: string|string[])
    {
        let baseSchedule = '/sc hourly /mo 1 /st'
        
        let schedules: string[] = [];

        if(!Array.isArray(minutes)) return `${baseSchedule} ${this.startTime(minutes)}`;
        
        minutes.forEach((value)=>{
            schedules.push(`${baseSchedule} ${this.startTime(value)}`);
        })

        return schedules;
    }

    private static startTime(minutes: string|string[])
    {
        const now = new Date();

        if(Number(minutes) == now.getMinutes())
        {
            return `${now.getHours()}:${minutes}`;
        }

        return `${now.getHours() + 1}:${minutes}`;
    }
}