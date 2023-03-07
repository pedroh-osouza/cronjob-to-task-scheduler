import { cronData } from "../interfaces/cronData";
import { Daily } from "./SchedulesTypes/Daily";
import { DailySpecificDay } from "./SchedulesTypes/DailySpecificDay";
import { SpecificHour } from "./SchedulesTypes/SpecificHour";
import { SpecificMinute } from "./SchedulesTypes/SpecificMinute";

export class SelectScheduleType
{
    static select(data: cronData)
    {
        const {minutes, hours, dayOfMonth, month, dayOfWeek} = data;
        const allMinutes: Boolean = (minutes == '*' && hours == '*' && dayOfMonth == '*' && month == '*' && dayOfWeek == '*')
        const specificMinutes: Boolean = (minutes != '*' && hours == '*' && dayOfMonth == '*' && month == '*' && dayOfWeek == '*')
        const specificHour: Boolean = (minutes == '*' && hours != '*' && dayOfMonth == '*' && month == '*' && dayOfWeek == '*')
        const daily: Boolean = (minutes != '*' && hours != '*' && dayOfMonth == '*' && month == '*' && dayOfWeek == '*')
        const specificDayOfMonth: Boolean = (minutes == '*' && hours == '*' && dayOfMonth != '*' && month == '*' && dayOfWeek == '*')
        const minuteDayOfMonth: Boolean = (minutes != '*' && hours == '*' && dayOfMonth != '*' && month == '*' && dayOfWeek == '*')
        const hourDayOfMonth: Boolean = (minutes == '*' && hours != '*' && dayOfMonth != '*' && month == '*' && dayOfWeek == '*')
        const minuteHourDayOfMonth: Boolean = (minutes != '*' && hours != '*' && dayOfMonth != '*' && month == '*' && dayOfWeek == '*')
        const specificMonth: Boolean = (minutes == '*' && hours == '*' && dayOfMonth == '*' && month != '*' && dayOfWeek == '*')
        const minuteMonth: Boolean = (minutes != '*' && hours == '*' && dayOfMonth == '*' && month != '*' && dayOfWeek == '*')
        const hourMonth: Boolean = (minutes == '*' && hours != '*' && dayOfMonth == '*' && month != '*' && dayOfWeek == '*')
        const minuteHourMonth: Boolean = (minutes != '*' && hours != '*' && dayOfMonth == '*' && month != '*' && dayOfWeek == '*')
        const dayOfMonthMonth: Boolean = (minutes == '*' && hours == '*' && dayOfMonth != '*' && month != '*' && dayOfWeek == '*')
        const minuteDayOfMonthMonth: Boolean = (minutes != '*' && hours == '*' && dayOfMonth != '*' && month != '*' && dayOfWeek == '*')
        const hourDayOfMonthMonth: Boolean = (minutes == '*' && hours != '*' && dayOfMonth != '*' && month != '*' && dayOfWeek == '*')
        const hourMinuteDayOfMonthMonth: Boolean = (minutes != '*' && hours != '*' && dayOfMonth != '*' && month != '*' && dayOfWeek == '*')
        const specificDayOfWeek: Boolean = (minutes == '*' && hours == '*' && dayOfMonth == '*' && month == '*' && dayOfWeek != '*')
        const minuteDayOfWeek: Boolean = (minutes != '*' && hours == '*' && dayOfMonth == '*' && month == '*' && dayOfWeek != '*')
        const hourDayOfWeek: Boolean = (minutes == '*' && hours != '*' && dayOfMonth == '*' && month == '*' && dayOfWeek != '*')
        const dailySpecificDay: Boolean = (minutes != '*' && hours != '*' && dayOfMonth == '*' && month == '*' && dayOfWeek != '*')
        const dayOfMonthDayOfWeek: Boolean = (minutes == '*' && hours == '*' && dayOfMonth != '*' && month == '*' && dayOfWeek != '*')
        const minuteDayOfMonthDayOfWeek: Boolean = (minutes != '*' && hours == '*' && dayOfMonth != '*' && month == '*' && dayOfWeek != '*')
        const hourDayOfMonthDayOfWeek: Boolean = (minutes == '*' && hours != '*' && dayOfMonth != '*' && month == '*' && dayOfWeek != '*')
        const minuteHourDayOfMonthDayOfWeek : Boolean = (minutes != '*' && hours != '*' && dayOfMonth != '*' && month == '*' && dayOfWeek != '*')
        const monthDayOfWeek: Boolean = (minutes == '*' && hours == '*' && dayOfMonth == '*' && month != '*' && dayOfWeek != '*')
        const minuteMonthDayOfWeek: Boolean = (minutes != '*' && hours == '*' && dayOfMonth == '*' && month != '*' && dayOfWeek != '*')
        const hourMonthDayOfWeek: Boolean = (minutes == '*' && hours != '*' && dayOfMonth == '*' && month != '*' && dayOfWeek != '*')
        const minuteHourMonthDayOfWeek: Boolean = (minutes != '*' && hours != '*' && dayOfMonth == '*' && month != '*' && dayOfWeek != '*')
        const dayOfMonthMonthDayOfWeek: Boolean = (minutes == '*' && hours == '*' && dayOfMonth != '*' && month != '*' && dayOfWeek != '*')
        const minuteDayOfMonthMonthDayOfWeek: Boolean = (minutes != '*' && hours == '*' && dayOfMonth != '*' && month != '*' && dayOfWeek != '*')
        const hourDayOfMonthMonthDayOfWeek: Boolean = (minutes == '*' && hours != '*' && dayOfMonth != '*' && month != '*' && dayOfWeek != '*')
        const specificAll: Boolean = (minutes != '*' && hours != '*' && dayOfMonth != '*' && month != '*' && dayOfWeek != '*')
        
        if(daily) return Daily.handle(minutes, hours);
        if(dailySpecificDay) return DailySpecificDay.handle(minutes, hours, dayOfWeek);
        if(specificMinutes) return SpecificMinute.handle(minutes);
        if(specificHour) return SpecificHour.handle(hours);
    }
}