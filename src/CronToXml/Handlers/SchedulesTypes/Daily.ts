import { CronData } from "../../interfaces/CronData";
import { ScheduleByDay, CalendarTrigger } from "../../interfaces/ScheduleXmlObject";
import { StartTime } from "../StartTime";

export class Daily {
    static getTrigger(cronData: CronData): CalendarTrigger | CalendarTrigger[] {
        const scheduleByDay: ScheduleByDay = {
            DaysInterval: {
                _text: 1
            }
        };

        const startTimes = StartTime.convert(cronData.minutes, cronData.hours);

        if (!Array.isArray(startTimes)) {
            return {
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: startTimes
                },
                ScheduleByDay: scheduleByDay
            }
        }

        let triggers: CalendarTrigger[] = [];

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

            triggers.push(trigger);
        };
        
        return triggers;
    }
}