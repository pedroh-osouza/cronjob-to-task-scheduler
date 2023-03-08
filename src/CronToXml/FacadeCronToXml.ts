import { CronValidator } from "./Handlers/CronValidate";
import { js2xml } from 'xml-js';
import * as fs from 'fs';
import { InvalidCronException } from "./Exceptions/InvalidCronException";

export class CronToXml
{
    static convert(taskName: string, cron: string, taskRun: string)
    {
        const cronValidator = new CronValidator()
        if(!cronValidator.isValid(cron)) throw new InvalidCronException(cron);

        // const options = { compact: true, ignoreComment: true, spaces: 4};
        // const xml = js2xml({}, options);

        // fs.writeFileSync('task.xml', xml)
    }
}