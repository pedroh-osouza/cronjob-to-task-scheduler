import { CronData } from "../interfaces/CronData";
import { ScheduleByMonthDayOfWeek } from "../interfaces/ScheduleXmlObject";
import { DaysOfMonth } from "./DaysOfMonth";
import { DaysOfWeek } from "./DaysOfWeek";

export class MonthDayOfWeek
{
    static getScheduleMonthDayOfWeek(cronData: CronData): ScheduleByMonthDayOfWeek
    {   
        const daysOfWeek = DaysOfWeek.getWeeks(cronData);
        const months = DaysOfMonth.getMonths(cronData);

        const scheduleByWeek: ScheduleByMonthDayOfWeek = {
            DaysOfWeek: daysOfWeek,
            Months: months,
            Weeks: {
                Week: [
                    { _text: 1 }, { _text: 2 }, { _text: 3 }, { _text: 4 },
                ]
            }
        };

        return scheduleByWeek;
    }
}