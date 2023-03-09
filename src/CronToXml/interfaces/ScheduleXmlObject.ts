export type ScheduleByDay = {
  DaysInterval: {
    _text: number
  }
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
    WeeksInterval: {
      _text: number & { min: 1, max: 52 }
    }
  }
}

type Day = {
  _text: number & { min: 1, max: 31 }
}
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
    Day: Day | Day[]
  }
}

export type Trigger = {
  CalendarTrigger: {
    Repetition?: {
      Interval: {
        _text: string;
      };
      Duration: {
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
      _text: string
    };
    ExecutionTimeLimit?: {
      _text: string;
    };
    Enabled: {
      _text: boolean
    };
    ScheduleByDay?: ScheduleByDay;
    ScheduleByWeek?: ScheduleByWeek;
    ScheduleByMonth?: ScheduleByMonth
  }
}

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
    Triggers: Trigger[] | Trigger;
    Actions: {
      _attributes: {
        Context: string;
      };
      Exec: {
        Command: {
          _text: string;
        };
      };
    };
  };
}
