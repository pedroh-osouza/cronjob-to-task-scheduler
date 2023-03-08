import { Cron } from "./Handlers/Cron";
import { js2xml } from 'xml-js';
import * as fs from 'fs';
import { InvalidCronException } from "./Exceptions/InvalidCronException";

export class CronToXml
{
    static convert(taskName: string, cronExpression: string, taskRun: string)
    {
        const cron = new Cron();
        cron.validate(cronExpression);
        // const data = cron.toData(cronExpression);
        // console.log(data)

        // const options = { compact: true, ignoreComment: true, spaces: 4};
        // const xml = js2xml({}, options);

        // fs.writeFileSync('task.xml', xml)
    }
}