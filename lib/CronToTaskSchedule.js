"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronToTaskSchedule = void 0;
const Cron_1 = require("./Handlers/Cron");
const Daily_1 = require("./Handlers/SchedulesTypes/Daily");
const Monthly_1 = require("./Handlers/SchedulesTypes/Monthly");
const MonthlyDayOfWeek_1 = require("./Handlers/SchedulesTypes/MonthlyDayOfWeek");
const ScheduleType_1 = require("./Handlers/SchedulesTypes/ScheduleType");
const TimeTrigger_1 = require("./Handlers/SchedulesTypes/TimeTrigger");
const Weekly_1 = require("./Handlers/SchedulesTypes/Weekly");
const Task_1 = require("./Handlers/Task");
const child_process_1 = require("child_process");
class CronToTaskSchedule {
    static convert(taskName, cronExpression, taskRun) {
        const cron = new Cron_1.Cron();
        const cronData = cron.toData(cronExpression);
        const scheduleType = ScheduleType_1.ScheduleType.selectScheduleType(cronData);
        console.log('scheduleType', scheduleType);
        let triggers;
        switch (scheduleType) {
            case 'time':
                triggers = TimeTrigger_1.TimeTrigger.getTrigger(cronData);
                break;
            case 'daily':
                triggers = Daily_1.Daily.getTrigger(cronData);
                break;
            case 'weekly':
                triggers = Weekly_1.Weekly.getTrigger(cronData);
                break;
            case 'monthly':
                triggers = Monthly_1.Monthly.getTrigger(cronData);
                break;
            case 'monthlyDayOfWeek':
                triggers = MonthlyDayOfWeek_1.MonthlyDayOfWeek.getTrigger(cronData);
                break;
            default:
                throw new Error('error on select scheduleType');
        }
        const task = new Task_1.Task(taskName, triggers, taskRun);
        return task.schedule();
    }
    static deleteTask(taskName) {
        return (0, child_process_1.execSync)(`schtasks /delete /tn "${taskName}" /F`, { stdio: 'ignore' });
    }
}
exports.CronToTaskSchedule = CronToTaskSchedule;
//# sourceMappingURL=CronToTaskSchedule.js.map