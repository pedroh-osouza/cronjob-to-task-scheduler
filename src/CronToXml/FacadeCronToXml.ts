import { Cron } from "./Handlers/Cron";
import { Daily } from "./Handlers/SchedulesTypes/Daily";
import { Monthly } from "./Handlers/SchedulesTypes/Monthly";
import { selectScheduleType } from "./Handlers/SchedulesTypes/selectScheduleType";
import { Weekly } from "./Handlers/SchedulesTypes/Weekly";

export class CronToXml
{
    static convert(taskName: string, cronExpression: string, taskRun: string)
    {
        const cron = new Cron();
        cron.validate(cronExpression);
        const cronData = cron.toData(cronExpression);
        const scheduleType = selectScheduleType(cronData);
        let trigger;

        switch(scheduleType)
        {
            case 'daily':
                trigger = Daily.getTrigger(cronData);
                break;
            case 'weekly':
                trigger = Weekly.getTrigger(cronData);
                break;
            case 'monthly':
                trigger = Monthly.getTrigger(cronData);
                break;
            default:
                throw new Error('error on select scheduleType')
        }

        console.log(trigger);
    }
}