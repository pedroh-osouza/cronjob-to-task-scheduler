import { CronData } from "../interfaces/CronData";
import { Day, ScheduleByMonth } from "../interfaces/ScheduleXmlObject";

export class DaysOfMonth
{
    static getScheduleMonth(cronData: CronData): ScheduleByMonth
    {
        let days: Day[] = [];

        if(Array.isArray(cronData.daysOfMonths))
        {
            for (let i = 0; i < cronData.daysOfMonths.length; i++) {
                const day: Day = {
                    _text: Number(cronData.daysOfMonths[i])
                }
                days.push(day)
            }
        };

        if(days.length === 0)
        {
            const day: Day = {
                _text: Number(cronData.daysOfMonths)
            }

            days.push(day);
        };
        
        const scheduleByMonth: ScheduleByMonth = {
            DaysOfMonth: {
                Day: days
            },
            Months: {
                January:{},February:{},March:{},April:{},May:{},June:{},July:{},
                August:{},September:{},October:{},November:{},December:{},
            }
        };

        return scheduleByMonth;
    }
}