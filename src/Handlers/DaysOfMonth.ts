import { CronData } from "../interfaces/CronData";
import { Day, ScheduleByMonth } from "../interfaces/ScheduleXmlObject";

interface  Months {
    [key: string]: any;
}
export class DaysOfMonth
{
    static getScheduleMonth(cronData: CronData): ScheduleByMonth
    {
        const days = this.getDays(cronData);
        const months = this.getMonths(cronData);

        const scheduleByMonth: ScheduleByMonth = {
            DaysOfMonth: {
                Day: days
            },
            Months: months
        };

        return scheduleByMonth;
    }

    private static getDays(cronData: CronData)
    {
        let days: Day[] = [];
        
        if(cronData.daysOfMonths === '*')
        {
            for (let i = 1; i <= 31; i++) {
                const day: Day = {
                    _text: i
                }
                days.push(day)
            }

            return days;
        }

        if(Array.isArray(cronData.daysOfMonths))
        {
            for (let i = 0; i < cronData.daysOfMonths.length; i++) {
                const day: Day = {
                    _text: Number(cronData.daysOfMonths[i])
                }
                days.push(day)
            }

            return days
        };

        return {
            _text: Number(cronData.daysOfMonths)
        };
    }

    static getMonths(cronData: CronData)
    {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        const selectedMonths: Months = {};

        if(!Array.isArray(cronData.months))
        {
            if(cronData.months === '*')
            {
                for(const month of months) selectedMonths[month] = undefined;
                return selectedMonths;
            }

            const monthName = months[Number(cronData.months) - 1]
            selectedMonths[monthName] = undefined
            return selectedMonths;
        }
        
        for(let i = 0; i < cronData.months.length; i++)
        {
            const monthName = months[Number(cronData.months[i]) - 1]
            selectedMonths[monthName] = undefined
        }

        return selectedMonths;
    }
}