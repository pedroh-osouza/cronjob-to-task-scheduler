import { Cron } from "./Handlers/Cron";
import { js2xml } from 'xml-js';
import * as fs from 'fs';
import { InvalidCronException } from "./Exceptions/InvalidCronException";
import { ScheduleType } from "./Handlers/ScheduleType";

export class CronToXml
{
    static convert(taskName: string, cronExpression: string, taskRun: string)
    {
        const cron = new Cron();
        cron.validate(cronExpression);
        const data = cron.toData(cronExpression);
        const scheduleType = ScheduleType.select(data);

        // const options = { compact: true, ignoreComment: true, spaces: 4};
        // const xml = js2xml({}, options);

        // fs.writeFileSync('task.xml', xml)
    }
}