import moment from "moment";
import { CronData } from "../../interfaces/CronData";
import { CalendarTrigger } from "../../interfaces/ScheduleXmlObject";
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
        const now = moment();
        const scheduleByWeek = DaysOfWeek.getScheduleWeek(cronData);

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

            calendarTriggers.push(trigger)
        }
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }

    private static hour(cronData: CronData)
    {
        const now = moment();
        const scheduleByWeek = DaysOfWeek.getScheduleWeek(cronData);

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
                    ScheduleByWeek: scheduleByWeek
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
                ScheduleByWeek: scheduleByWeek
            }

            calendarTriggers.push(trigger)
        }
        
        return {
            CalendarTrigger: calendarTriggers
        };
    }

    private static minuteHour(cronData: CronData)
    {
        
    }
}