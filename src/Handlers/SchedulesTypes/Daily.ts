import { CronData } from "../../interfaces/CronData";
import { ScheduleByDay, CalendarTrigger, Triggers } from "../../interfaces/ScheduleXmlObject";
import { StartTime } from "../StartTime";
import moment from 'moment';

export class Daily {
    static getTrigger(cronData: CronData): Triggers 
    {
        if(cronData.minutes != '*' && cronData.hours != '*') return this.minuteHour(cronData);
        return this.hour(cronData);
    }

    private static minuteHour(cronData: CronData)
    {
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
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }

    private static hour(cronData:CronData): Triggers
    {
        const now = moment();
        const scheduleByDay: ScheduleByDay = {
            DaysInterval: {
                _text: 1
            }
        };

        if (!Array.isArray(cronData.hours)) {
            now.set({hour: Number(cronData.hours), minute: 0, second: 0})
            return {
                CalendarTrigger: {
                    Repetition: {
                        Interval: {
                            _text: 'PT1M'
                        },
                        Duration:{
                            _text: 'PT1H'
                        },
                        StopAtDurationEnd: {
                            _text: false
                        }
                    },
                    Enabled: {
                        _text: true
                    },
                    StartBoundary: {
                        _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                    },
                    ScheduleByDay: scheduleByDay
                }
            }
        }

        let calendarTriggers: CalendarTrigger[] = [];

        for (let i = 0; i < cronData.hours.length; i++) {
            now.set({hour: Number(cronData.hours[i]), minute: 0, second: 0})
            let trigger: CalendarTrigger = {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    Duration:{
                        _text: 'PT1H'
                    },
                    StopAtDurationEnd: {
                        _text: false
                    }
                },
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                },
                ScheduleByDay: scheduleByDay,
            }

            calendarTriggers.push(trigger);
        };
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }
}