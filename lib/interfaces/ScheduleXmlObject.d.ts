export type Week = {
    _text: number;
};
export type ScheduleByMonthDayOfWeek = {
    Weeks: {
        Week: Week[];
    };
    Months: {
        January?: {};
        February?: {};
        March?: {};
        April?: {};
        May?: {};
        June?: {};
        July?: {};
        August?: {};
        September?: {};
        October?: {};
        November?: {};
        December?: {};
    };
    DaysOfWeek: {
        Sunday?: {};
        Monday?: {};
        Tuesday?: {};
        Wednesday?: {};
        Thursday?: {};
        Friday?: {};
        Saturday?: {};
    };
};
export type ScheduleByDay = {
    DaysInterval: {
        _text: number;
    };
};
export type ScheduleByWeek = {
    DaysOfWeek: {
        Sunday?: {};
        Monday?: {};
        Tuesday?: {};
        Wednesday?: {};
        Thursday?: {};
        Friday?: {};
        Saturday?: {};
        WeeksInterval?: {
            _text: number & {
                min: 1;
                max: 52;
            };
        };
    };
};
export type Day = {
    _text: number;
};
export type ScheduleByMonth = {
    Months: {
        January?: {};
        February?: {};
        March?: {};
        April?: {};
        May?: {};
        June?: {};
        July?: {};
        August?: {};
        September?: {};
        October?: {};
        November?: {};
        December?: {};
    };
    DaysOfMonth: {
        Day: Day | Day[];
    };
};
export type CalendarTrigger = {
    Repetition?: {
        Interval: {
            _text: string;
        };
        Duration?: {
            _text: string;
        };
        StopAtDurationEnd: {
            _text: boolean;
        };
    };
    StartBoundary: {
        _text: string;
    };
    EndBoundary?: {
        _text: string;
    };
    ExecutionTimeLimit?: {
        _text: string;
    };
    Enabled: {
        _text: boolean;
    };
    ScheduleByDay?: ScheduleByDay;
    ScheduleByWeek?: ScheduleByWeek;
    ScheduleByMonth?: ScheduleByMonth;
    ScheduleByMonthDayOfWeek?: ScheduleByMonthDayOfWeek;
};
export type ScheduleTimeTrigger = {
    Repetition?: {
        Interval: {
            _text: string;
        };
        Duration?: {
            _text: string;
        };
        StopAtDurationEnd: {
            _text: boolean;
        };
    };
    StartBoundary: {
        _text: string;
    };
    EndBoundary?: {
        _text: string;
    };
    ExecutionTimeLimit?: {
        _text: string;
    };
    Enabled: {
        _text: boolean;
    };
};
export type Triggers = {
    TimeTrigger?: ScheduleTimeTrigger | ScheduleTimeTrigger[];
    CalendarTrigger?: CalendarTrigger | CalendarTrigger[];
};
export interface ScheduleXmlObject {
    _declaration: {
        _attributes: {
            version: string;
            encoding: string;
        };
    };
    Task: {
        _attributes: {
            version: string;
            xmlns: string;
        };
        Triggers: Triggers;
        Actions: {
            _attributes: {
                Context: string;
            };
            Exec: {
                Command: {
                    _text: string;
                };
                Arguments: {
                    _text: string;
                };
            };
        };
        Settings: {
            ExecutionTimeLimit: {
                _text: string;
            };
            RestartOnFailure: {
                Interval: {
                    _text: string;
                };
                Count: {
                    _text: number;
                };
            };
        };
    };
}
