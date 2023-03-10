import { CronData } from "../interfaces/CronData";
import { ScheduleByWeek } from "../interfaces/ScheduleXmlObject";

interface Weeks {
    [key: string]: any;
}
export class DaysOfWeek
{
    static getScheduleWeek(cronData: CronData)
    {   
        const weeks = this.getWeeks(cronData);

        const scheduleByWeek: ScheduleByWeek = {
            DaysOfWeek: weeks
        };

        return scheduleByWeek;
    }

    private static getWeeks(cronData: CronData)
    {
        const weeks = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]

        const selectedWeeks: Weeks = {};

        if(!Array.isArray(cronData.daysOfWeeks))
        {
            if(cronData.daysOfWeeks === '*')
            {
                for(const week of weeks) selectedWeeks[week] = undefined;
                return selectedWeeks;
            }

            const weekName = weeks[Number(cronData.daysOfWeeks) - 1]
            selectedWeeks[weekName] = undefined
            return selectedWeeks;
        }
        
        for(let i = 0; i < cronData.daysOfWeeks.length; i++)
        {
            const weekName = weeks[Number(cronData.daysOfWeeks[i]) - 1]
            selectedWeeks[weekName] = undefined
        }

        return selectedWeeks;
    }
}