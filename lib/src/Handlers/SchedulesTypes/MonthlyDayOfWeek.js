"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyDayOfWeek = void 0;
const moment_1 = __importDefault(require("moment"));
const MonthDayOfWeek_1 = require("../MonthDayOfWeek");
const StartTime_1 = require("../StartTime");
class MonthlyDayOfWeek {
    static getTrigger(cronData) {
        if (cronData.minutes != '*' && cronData.hours != '*')
            return this.minuteHour(cronData);
        if (cronData.minutes != '*' && cronData.hours == '*')
            return this.minute(cronData);
        if (cronData.minutes == '*' && cronData.hours != '*')
            return this.hour(cronData);
        const now = (0, moment_1.default)();
        const scheduleByMonthDayOfWeek = MonthDayOfWeek_1.MonthDayOfWeek.getScheduleMonthDayOfWeek(cronData);
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
                ScheduleByMonthDayOfWeek: scheduleByMonthDayOfWeek
            }
        };
    }
    static minute(cronData) {
        const now = (0, moment_1.default)();
        const scheduleByMonthDayOfWeek = MonthDayOfWeek_1.MonthDayOfWeek.getScheduleMonthDayOfWeek(cronData);
        if (!Array.isArray(cronData.minutes)) {
            now.set({ minute: Number(cronData.minutes), second: 0 });
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
                    ScheduleByMonthDayOfWeek: scheduleByMonthDayOfWeek
                }
            };
        }
        let calendarTriggers = [];
        for (let i = 0; i < cronData.minutes.length; i++) {
            now.set({ minute: Number(cronData.minutes[i]), second: 0 });
            const trigger = {
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
                ScheduleByMonthDayOfWeek: scheduleByMonthDayOfWeek
            };
            calendarTriggers.push(trigger);
        }
        return {
            CalendarTrigger: calendarTriggers
        };
    }
    static hour(cronData) {
        const now = (0, moment_1.default)();
        const scheduleByMonthDayOfWeek = MonthDayOfWeek_1.MonthDayOfWeek.getScheduleMonthDayOfWeek(cronData);
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
                        },
                    },
                    Enabled: {
                        _text: true
                    },
                    StartBoundary: {
                        _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                    },
                    ScheduleByMonthDayOfWeek: scheduleByMonthDayOfWeek
                }
            };
        }
        let calendarTriggers = [];
        for (let i = 0; i < cronData.hours.length; i++) {
            now.set({ hour: Number(cronData.hours[i]), minute: 0, second: 0 });
            const trigger = {
                Repetition: {
                    Interval: {
                        _text: 'PT1M'
                    },
                    Duration: {
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
                ScheduleByMonthDayOfWeek: scheduleByMonthDayOfWeek
            };
            calendarTriggers.push(trigger);
        }
        return {
            CalendarTrigger: calendarTriggers
        };
    }
    static minuteHour(cronData) {
        const scheduleByMonthDayOfWeek = MonthDayOfWeek_1.MonthDayOfWeek.getScheduleMonthDayOfWeek(cronData);
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
                    ScheduleByMonthDayOfWeek: scheduleByMonthDayOfWeek
                }
            };
        }
        let calendarTriggers = [];
        for (let i = 0; i < startTimes.length; i++) {
            const trigger = {
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: startTimes[i]
                },
                ScheduleByMonthDayOfWeek: scheduleByMonthDayOfWeek
            };
            calendarTriggers.push(trigger);
        }
        return {
            CalendarTrigger: calendarTriggers
        };
    }
}
exports.MonthlyDayOfWeek = MonthlyDayOfWeek;
