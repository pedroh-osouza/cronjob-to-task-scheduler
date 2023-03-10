import { CronData } from "../../interfaces/CronData";
import { ScheduleTimeTrigger, Triggers,  } from "../../interfaces/ScheduleXmlObject";
import moment from 'moment';

export class TimeTrigger
{
    static getTrigger(cronData: CronData): Triggers
    {
        const now = moment();
        
        if(!Array.isArray(cronData.minutes))
        {            
            if(cronData.minutes != '*') now.set({minute: Number(cronData.minutes), second: 0})
            
            return {
                TimeTrigger: {
                    Enabled: {
                        _text: true
                    },
                    StartBoundary: {
                        _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                    },
                    Repetition: {
                        Interval: {
                            _text: (cronData.minutes == '*') ? 'PT1M' : 'PT1H'
                        },
                        StopAtDurationEnd: {
                            _text: false
                        }
                    }
                }
            }
        }

        let timeTriggers: ScheduleTimeTrigger[] = [];
        for(let i = 0; i < cronData.minutes.length; i++)
        {
            now.set({minute: Number(cronData.minutes[i]), second: 0})
            let trigger: ScheduleTimeTrigger = {
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                },
                Repetition: {
                    Interval: {
                        _text: 'PT1H'
                    },
                    StopAtDurationEnd: {
                        _text: false
                    }
                }
            }

            timeTriggers.push(trigger);
        }

        return {
            TimeTrigger: timeTriggers
        };
    }
}