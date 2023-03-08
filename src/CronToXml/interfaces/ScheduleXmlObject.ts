type Trigger = {
  CalendaryTrigger:{
    ScheduleByDay?: {

    }
    ScheduleByMonth?:{

    }
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
      Triggers: Trigger[]|Trigger;
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
  