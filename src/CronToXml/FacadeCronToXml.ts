import { Cron } from "./Handlers/Cron";
import { Daily } from "./Handlers/SchedulesTypes/Daily";
import { Monthly } from "./Handlers/SchedulesTypes/Monthly";
import { selectScheduleType } from "./Handlers/SchedulesTypes/selectScheduleType";
import { TimeTrigger } from "./Handlers/SchedulesTypes/TimeTrigger";
import { Weekly } from "./Handlers/SchedulesTypes/Weekly";
import { Task } from "./Handlers/Task";

export class CronToXml
{
    static convert(taskName: string, cronExpression: string, taskRun: string)
    {
        const cron = new Cron();
        cron.validate(cronExpression);

        const cronData = cron.toData(cronExpression);
        const scheduleType = selectScheduleType(cronData);

        let triggers;
        switch(scheduleType)
        {
            case 'time':
                triggers = TimeTrigger.getTrigger(cronData);
            case 'daily':
                triggers = Daily.getTrigger(cronData);
                break;
            case 'weekly':
                triggers = Weekly.getTrigger(cronData);
                break;
            case 'monthly':
                triggers = Monthly.getTrigger(cronData);
                break;
            default:
                throw new Error('error on select scheduleType')
        }
        
        if(triggers)
        {
            const task = new Task(taskName, triggers, taskRun);
            if(task.schedule()) console.log('tarefa agendada com sucesso')
        }
    }
}