import { CronData } from "../../interfaces/CronData";
import { CalendarTrigger, Day, ScheduleByMonth, Triggers } from "../../interfaces/ScheduleXmlObject";
import moment from 'moment'
import { DaysOfMonth } from "../DaysOfMonth";
import { StartTime } from "../StartTime";
export class Monthly
{
    static getTrigger(cronData: CronData): Triggers
    {
        if(cronData.minutes == '*' && cronData.hours == '*' && cronData.daysOfMonths != '*' && cronData.months == '*' && cronData.daysOfWeeks == '*') return this.dayOfMonth(cronData);
        if(cronData.minutes != '*' && cronData.hours == '*' && cronData.daysOfMonths != '*' && cronData.months == '*' && cronData.daysOfWeeks == '*') return this.minuteDayOfMonth(cronData)
        if(cronData.minutes == '*' && cronData.hours != '*' && cronData.daysOfMonths != '*' && cronData.months == '*' && cronData.daysOfWeeks == '*') return this.hourDayOfMonth(cronData)
        if(cronData.minutes != '*' && cronData.hours != '*' && cronData.daysOfMonths != '*' && cronData.months == '*' && cronData.daysOfWeeks == '*') return this.minuteHourDayOfMonth(cronData)
        if(cronData.minutes == '*' && cronData.hours == '*' && cronData.daysOfMonths == '*' && cronData.months != '*' && cronData.daysOfWeeks == '*') return this.month(cronData)

        return {

        };
    }

    private static dayOfMonth(cronData: CronData): Triggers
    {
        const now = moment();
        const scheduleByMonth = DaysOfMonth.getScheduleMonth(cronData);

        return {
            CalendarTrigger: {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    StopAtDurationEnd: {
                        _text: false
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
                ScheduleByMonth: scheduleByMonth
            }
        }
    }

    private static minuteDayOfMonth(cronData: CronData): Triggers
    {
        const now = moment();
        const scheduleByMonth = DaysOfMonth.getScheduleMonth(cronData);

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

    private static hourDayOfMonth(cronData: CronData): Triggers
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

    private static minuteHourDayOfMonth(cronData: CronData): Triggers
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

    private static month(cronData: CronData): Triggers
    {
        const now = moment();
        const scheduleByMonth = DaysOfMonth.getScheduleMonth(cronData);

        return {
            CalendarTrigger: {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    StopAtDurationEnd: {
                        _text: false
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
                ScheduleByMonth: scheduleByMonth
            }
        }
    }
}