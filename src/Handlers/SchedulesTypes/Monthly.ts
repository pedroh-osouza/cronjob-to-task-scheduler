export class Monthly
{
    static dayOfMonth(daysOfMonths: string|string[])
    {
        const baseSchedule = '/sc monthly /d';

        if(!Array.isArray(daysOfMonths))
        {
            return `${baseSchedule} ${daysOfMonths}`;
        }

        let selectedValues: string[] = []

        daysOfMonths.forEach((value)=>{
            selectedValues.push(`${baseSchedule} ${value}`)
        })

        return selectedValues;
    }
}