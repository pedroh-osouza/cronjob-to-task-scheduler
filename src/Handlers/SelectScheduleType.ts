import { cronData } from "../interfaces/cronData";
import { Daily } from "./SchedulesTypes/Daily";
import { Hourly } from "./SchedulesTypes/Hourly";
import { Minute } from "./SchedulesTypes/Minute";
import { Monthly } from "./SchedulesTypes/Monthly";
import { Weekly } from "./SchedulesTypes/Weekly";

export class SelectScheduleType
{
    static select(data: cronData)
    {
        const {minutes, hours, daysOfMonths, months, daysOfWeeks} = data;
        const allUnchecked: Boolean = (minutes == '*' && hours == '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks == '*')
        const minute: Boolean = (minutes != '*' && hours == '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks == '*')
        const hour: Boolean = (minutes == '*' && hours != '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks == '*')
        const minuteHour: Boolean = (minutes != '*' && hours != '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks == '*')
        const dayOfMonth: Boolean = (minutes == '*' && hours == '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks == '*')
        const minuteDayOfMonth: Boolean = (minutes != '*' && hours == '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks == '*')
        const hourDayOfMonth: Boolean = (minutes == '*' && hours != '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks == '*')
        const minuteHourDayOfMonth: Boolean = (minutes != '*' && hours != '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks == '*')
        const month: Boolean = (minutes == '*' && hours == '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks == '*')
        const minuteMonth: Boolean = (minutes != '*' && hours == '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks == '*')
        const hourMonth: Boolean = (minutes == '*' && hours != '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks == '*')
        const minuteHourMonth: Boolean = (minutes != '*' && hours != '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks == '*')
        const dayOfMonthMonth: Boolean = (minutes == '*' && hours == '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks == '*')
        const minuteDayOfMonthMonth: Boolean = (minutes != '*' && hours == '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks == '*')
        const hourDayOfMonthMonth: Boolean = (minutes == '*' && hours != '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks == '*')
        const hourMinuteDayOfMonthMonth: Boolean = (minutes != '*' && hours != '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks == '*')
        const dayOfWeek: Boolean = (minutes == '*' && hours == '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks != '*')
        const minuteDayOfWeek: Boolean = (minutes != '*' && hours == '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks != '*')
        const hourDayOfWeek: Boolean = (minutes == '*' && hours != '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks != '*')
        const minuteHourDayOfWeek: Boolean = (minutes != '*' && hours != '*' && daysOfMonths == '*' && months == '*' && daysOfWeeks != '*')
        const dayOfMonthDayOfWeek: Boolean = (minutes == '*' && hours == '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks != '*')
        const minuteDayOfMonthDayOfWeek: Boolean = (minutes != '*' && hours == '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks != '*')
        const hourDayOfMonthDayOfWeek: Boolean = (minutes == '*' && hours != '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks != '*')
        const minuteHourDayOfMonthDayOfWeek : Boolean = (minutes != '*' && hours != '*' && daysOfMonths != '*' && months == '*' && daysOfWeeks != '*')
        const monthDayOfWeek: Boolean = (minutes == '*' && hours == '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks != '*')
        const minuteMonthDayOfWeek: Boolean = (minutes != '*' && hours == '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks != '*')
        const hourMonthDayOfWeek: Boolean = (minutes == '*' && hours != '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks != '*')
        const minuteHourMonthDayOfWeek: Boolean = (minutes != '*' && hours != '*' && daysOfMonths == '*' && months != '*' && daysOfWeeks != '*')
        const dayOfMonthMonthDayOfWeek: Boolean = (minutes == '*' && hours == '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks != '*')
        const minuteDayOfMonthMonthDayOfWeek: Boolean = (minutes != '*' && hours == '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks != '*')
        const hourDayOfMonthMonthDayOfWeek: Boolean = (minutes == '*' && hours != '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks != '*')
        const allFilled: Boolean = (minutes != '*' && hours != '*' && daysOfMonths != '*' && months != '*' && daysOfWeeks != '*')
        
        if(allUnchecked) return Minute.allUnchecked();
        if(minute) return Hourly.minute(minutes);
        if(hour) return Minute.hour(hours);
        if(minuteHour) return Daily.minuteHour(minutes, hours);
        if(dayOfMonth) return Monthly.dayOfMonth(daysOfMonths);
        // if(minuteDayOfMonth) return Monthly.minuteDayOfMonth(minutes, daysOfMonths);
        if(hourDayOfMonth) return;
        if(minuteHourDayOfMonth) return;
        if(month) return;
        if(minuteMonth) return;
        if(hourMonth) return;
        if(minuteHourMonth) return;
        if(dayOfMonthMonth) return;
        if(minuteDayOfMonthMonth) return;
        if(hourDayOfMonthMonth) return;
        if(hourMinuteDayOfMonthMonth) return;
        if(dayOfWeek) return;
        if(minuteDayOfWeek) return;
        if(hourDayOfWeek) return;
        if(minuteHourDayOfWeek) return Weekly.minuteHourDayOfWeek(minutes, hours, daysOfWeeks);
        if(dayOfMonthDayOfWeek) return;
        if(minuteDayOfMonthDayOfWeek) return;
        if(hourDayOfMonthDayOfWeek) return;
        if(minuteHourDayOfMonthDayOfWeek) return;
        if(monthDayOfWeek) return;
        if(minuteMonthDayOfWeek) return;
        if(hourMonthDayOfWeek) return;
        if(minuteHourMonthDayOfWeek) return;
        if(dayOfMonthMonthDayOfWeek) return;
        if(minuteDayOfMonthMonthDayOfWeek) return;
        if(hourDayOfMonthMonthDayOfWeek) return;
        if(allFilled) return;    
    }
}