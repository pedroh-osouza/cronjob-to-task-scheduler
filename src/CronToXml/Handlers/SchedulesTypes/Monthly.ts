import { CronData } from "../../interfaces/CronData";
import { CalendarTrigger, ScheduleByMonth, Triggers } from "../../interfaces/ScheduleXmlObject";

export class Monthly
{
    static getTrigger(cronData: CronData): Triggers
    {
        if(cronData.minutes == '*' && cronData.hours == '*' && cronData.daysOfMonths != '*' && cronData.months == '*' && cronData.daysOfWeeks == '*') return this.dayOfMonth(cronData)
        return {

        };
    }

    private static dayOfMonth(cronData: CronData): Triggers
    {
        let days: [] = [];
        if(Array.isArray(cronData.daysOfMonths))
        {
            for (let i = 0; i < cronData.daysOfMonths.length; i++) {
                const day = {
                    Day: {
                        _text: cronData.daysOfMonths[i]
                    }
                }
                days.push(day)
            }
        }

        const scheduleByMonth: ScheduleByMonth = {
            DaysOfMonth: {
                Day: days
            }
            Months: {

            }
        };

        if (!Array.isArray(startTimes)) {
            return {
                CalendarTrigger: {
                    Enabled: {
                        _text: true
                    },
                    StartBoundary: {
                        _text: startTimes
                    },
                    ScheduleByMonth: scheduleByMonth
                }
            }
        }

        let calendarTriggers: CalendarTrigger[] = [];

        for (let i = 0; i < startTimes.length; i++) {
            let trigger: CalendarTrigger = {
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: startTimes[i]
                },
                ScheduleByMonth: scheduleByMonth,
            }

            calendarTriggers.push(trigger);
        };
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }
}