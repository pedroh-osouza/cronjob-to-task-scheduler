import { CronData } from "../../interfaces/CronData";
import { CalendarTrigger, Day, ScheduleByMonth, Triggers } from "../../interfaces/ScheduleXmlObject";
import moment from 'moment'
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
        const now = moment();
        let days: Day[] = [];

        if(Array.isArray(cronData.daysOfMonths))
        {
            for (let i = 0; i < cronData.daysOfMonths.length; i++) {
                const day: Day = {
                    _text: Number(cronData.daysOfMonths[i])
                }
                days.push(day)
            }
        }

        if(days.length === 0)
        {
            const day: Day = {
                _text: Number(cronData.daysOfMonths)
            }

            days.push(day);
        }
        
        const scheduleByMonth: ScheduleByMonth = {
            DaysOfMonth: {
                Day: days
            },
            Months: {
                January:{},February:{},March:{},April:{},May:{},June:{},July:{},
                August:{},September:{},October:{},November:{},December:{},
            }
        };

        return {
            CalendarTrigger: {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    StopAtDurationEnd: {
                        _text: false
                    },
                },
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                },
                ScheduleByMonth: scheduleByMonth
            }
        }
    }
}