import moment from "moment";
import { CronData } from "../../interfaces/CronData";
import { DaysOfWeek } from "../DaysOfWeek";

export class Weekly
{
    static getTrigger(cronData: CronData)
    {
        if(cronData.minutes != '*' && cronData.hours != '*') return this.minuteHour(cronData);
        if(cronData.minutes != '*' && cronData.hours == '*') return this.minute(cronData);
        if(cronData.minutes == '*' && cronData.hours != '*') return this.hour(cronData);

        const now = moment();
        const scheduleByWeek = DaysOfWeek.getScheduleWeek(cronData);
        return {
            CalendarTrigger: {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    StopAtDurationEnd: {
                        _text: true
                    },
                    Duration: {
                        _text: 'P1D'
                    }
                },
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                },
                ScheduleByWeek: scheduleByWeek
            }
        }
    }

    private static minute(cronData: CronData)
    {
        
    }

    private static hour(cronData: CronData)
    {

    }
    
    private static minuteHour(cronData: CronData)
    {
        
    }
}