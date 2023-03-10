import { CronData } from "../interfaces/CronData";
import { ScheduleByWeek } from "../interfaces/ScheduleXmlObject";

interface Weeks {
    [key: string]: any;
}
export class DaysOfWeek
{
    static getScheduleWeek(cronData: CronData): ScheduleByWeek
    {   
        const weeks = this.getWeeks(cronData);

        const scheduleByWeek: ScheduleByWeek = {
            DaysOfWeek: weeks
        };

        return scheduleByWeek;
    }

    private static getWeeks(cronData: CronData)
    {
        const daysOfWeekName: { [key: string]: string} = {
            '0': 'Sunday',
            '1': 'Monday',
            '2': 'Tuesday',
            '3': 'Wednesday',
            '4': 'Thursday',
            '5': 'Friday',
            '6': 'Saturday',
            '7': 'Sunday',
        };

        const selectedWeeks: Weeks = {};

        if(!Array.isArray(cronData.daysOfWeeks))
        {
            if(cronData.daysOfWeeks === '*')
            {
                for(let i = 0; i < 7; i++) selectedWeeks[daysOfWeekName[i.toString()]] = undefined;
                return selectedWeeks;
            }

            const weekName = daysOfWeekName[cronData.daysOfWeeks]
            selectedWeeks[weekName] = undefined
            return selectedWeeks;
        }
        
        for(const dayOfWeek of cronData.daysOfWeeks)
        {
            const key = String(Number(dayOfWeek));
            const weekName = daysOfWeekName[key]
            selectedWeeks[weekName] = undefined
        }

        return selectedWeeks;
    }
}