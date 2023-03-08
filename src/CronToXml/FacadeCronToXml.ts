import { CronValidator } from "./Handlers/CronValidate";

export class CronToXml
{
    static convert(taskName: string, cron: string, taskRun: string)
    {
        const cronValidator = new CronValidator()
        cronValidator.validate(cron);
    }
}