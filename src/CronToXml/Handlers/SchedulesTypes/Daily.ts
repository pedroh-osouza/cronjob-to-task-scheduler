import { CronData } from "../../interfaces/CronData";
import { ScheduleByDay, CalendarTrigger, Triggers } from "../../interfaces/ScheduleXmlObject";
import { StartTime } from "../StartTime";

export class Daily {
    static getTrigger(cronData: CronData): Triggers {
        const scheduleByDay: ScheduleByDay = {
            DaysInterval: {
                _text: 1
            }
        };

        const startTimes = StartTime.convert(cronData.minutes, cronData.hours);

        if (!Array.isArray(startTimes)) {
            return {
                CalendarTrigger: {
                    Enabled: {
                        _text: true
                    },
                    StartBoundary: {
                        _text: startTimes
                    },
                    ScheduleByDay: scheduleByDay
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
                ScheduleByDay: scheduleByDay,
            }

            calendarTriggers.push(trigger);
        };
        
        console.log(calendarTriggers);
        return {
            CalendarTrigger: calendarTriggers
        };
    }
}