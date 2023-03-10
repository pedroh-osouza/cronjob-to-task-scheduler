"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Daily = void 0;
const StartTime_1 = require("../StartTime");
const moment_1 = __importDefault(require("moment"));
class Daily {
    static getTrigger(cronData) {
        if (cronData.minutes != '*' && cronData.hours != '*')
            return this.minuteHour(cronData);
        return this.hour(cronData);
    }
    static minuteHour(cronData) {
        const scheduleByDay = {
            DaysInterval: {
                _text: 1
            }
        };
        const startTimes = StartTime_1.StartTime.convert(cronData.minutes, cronData.hours);
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
            };
        }
        let calendarTriggers = [];
        for (let i = 0; i < startTimes.length; i++) {
            let trigger = {
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: startTimes[i]
                },
                ScheduleByDay: scheduleByDay,
            };
            calendarTriggers.push(trigger);
        }
        ;
        return {
            CalendarTrigger: calendarTriggers
        };
    }
    static hour(cronData) {
        const now = (0, moment_1.default)();
        const scheduleByDay = {
            DaysInterval: {
                _text: 1
            }
        };
        if (!Array.isArray(cronData.hours)) {
            now.set({ hour: Number(cronData.hours), minute: 0, second: 0 });
            return {
                CalendarTrigger: {
                    Repetition: {
                        Interval: {
                            _text: 'PT1M'
                        },
                        Duration: {
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
            };
        }
        let calendarTriggers = [];
        for (let i = 0; i < cronData.hours.length; i++) {
            now.set({ hour: Number(cronData.hours[i]), minute: 0, second: 0 });
            let trigger = {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    Duration: {
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
            };
            calendarTriggers.push(trigger);
        }
        ;
        return {
            CalendarTrigger: calendarTriggers
        };
    }
}
exports.Daily = Daily;
