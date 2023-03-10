import { CronData } from "../../interfaces/CronData";
import { CalendarTrigger, Triggers } from "../../interfaces/ScheduleXmlObject";
import moment from 'moment'
import { DaysOfMonth } from "../DaysOfMonth";
import { StartTime } from "../StartTime";
export class Monthly
{
    static getTrigger(cronData: CronData): Triggers
    {
        
        if(cronData.minutes != '*' && cronData.hours != '*') return this.minuteHour(cronData);
        if(cronData.minutes != '*' && cronData.hours == '*') return this.minute(cronData);
        if(cronData.minutes == '*' && cronData.hours != '*') return this.hour(cronData);
        
        const duration = (cronData.daysOfMonths != '*') ? 'P1D' : 'P30D'

        const now = moment();
        const scheduleByMonth = DaysOfMonth.getScheduleMonth(cronData);
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
                        _text: duration
                    }
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

    private static minute(cronData: CronData): Triggers
    {
        const now = moment();
        const scheduleByMonth = DaysOfMonth.getScheduleMonth(cronData);

        const duration = (cronData.daysOfMonths != '*') ? 'P1D' : 'P30D'

        if(!Array.isArray(cronData.minutes))
        {
            now.set({minute: Number(cronData.minutes), second: 0})

            return {
                CalendarTrigger: {
                    Repetition: {
                        Interval: {
                            _text: 'PT1H'
                        },
                        StopAtDurationEnd: {
                            _text: false
                        },
                        Duration: {
                            _text: duration
                        }
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

        let calendarTriggers: CalendarTrigger[] = [];
        for(let i = 0; i < cronData.minutes.length; i++)
        {
            now.set({minute: Number(cronData.minutes[i]), second: 0})
            const trigger: CalendarTrigger = {
                Repetition: {
                    Interval: {
                        _text: 'PT1H'
                    },
                    StopAtDurationEnd: {
                        _text: false
                    },
                    Duration: {
                        _text: duration
                    }
                },
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                },
                ScheduleByMonth: scheduleByMonth
            }

            calendarTriggers.push(trigger)
        }
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }

    private static hour(cronData: CronData): Triggers
    {
        const now = moment();
        const scheduleByMonth = DaysOfMonth.getScheduleMonth(cronData);

        if(!Array.isArray(cronData.hours))
        {
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

        let calendarTriggers: CalendarTrigger[] = [];
        for(let i = 0; i < cronData.hours.length; i++)
        {
            now.set({hour: Number(cronData.hours[i]), minute: 0, second: 0})
            const trigger: CalendarTrigger = {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    Duration:{
                        _text: 'PT1H'
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

            calendarTriggers.push(trigger)
        }
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }

    private static minuteHour(cronData: CronData): Triggers
    {
        const scheduleByMonth = DaysOfMonth.getScheduleMonth(cronData);

        const startTimes = StartTime.convert(cronData.minutes, cronData.hours);

        if(!Array.isArray(startTimes))
        {
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
        for(let i = 0; i < startTimes.length; i++)
        {
            const trigger: CalendarTrigger = {
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: startTimes[i]
                },
                ScheduleByMonth: scheduleByMonth
            }

            calendarTriggers.push(trigger)
        }
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }
}