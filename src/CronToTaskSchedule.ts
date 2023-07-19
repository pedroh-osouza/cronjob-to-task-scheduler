import { Cron } from "./Handlers/Cron";
import { Daily } from "./Handlers/SchedulesTypes/Daily";
import { Monthly } from "./Handlers/SchedulesTypes/Monthly";
import { MonthlyDayOfWeek } from "./Handlers/SchedulesTypes/MonthlyDayOfWeek";
import { ScheduleType } from "./Handlers/SchedulesTypes/ScheduleType";
import { TimeTrigger } from "./Handlers/SchedulesTypes/TimeTrigger";
import { Weekly } from "./Handlers/SchedulesTypes/Weekly";
import { Task } from "./Handlers/Task";
import { Triggers } from "./interfaces/ScheduleXmlObject";
import { execSync } from 'child_process';
import { Exec } from "./interfaces/Exec";

export class CronToTaskSchedule
{
    static convert(taskName: string, cronExpression: string, taskRun: Exec): boolean
    {
        const cron = new Cron();
        const cronData = cron.toData(cronExpression);
        const scheduleType = ScheduleType.selectScheduleType(cronData);
        
        let triggers: Triggers;
        switch(scheduleType)
        {
            case 'time':
                triggers = TimeTrigger.getTrigger(cronData);
                break;
            case 'daily':
                triggers = Daily.getTrigger(cronData);
                break;
            case 'weekly':
                triggers = Weekly.getTrigger(cronData);
                break;
            case 'monthly':
                triggers = Monthly.getTrigger(cronData);
                break;
            case 'monthlyDayOfWeek':
                triggers = MonthlyDayOfWeek.getTrigger(cronData);
                break
            default:
                throw new Error('error on select scheduleType')
        }
        
        const task = new Task(taskName, triggers, taskRun);

        return task.schedule()
    }

    static deleteTask(taskName: string)
    {
       return execSync(`schtasks /delete /tn "${taskName}" /F`, {stdio: 'ignore'});
    }
}