export class InvalidCronException extends Error
{
    constructor(cronExpression: string)
    {
        const message = `${cronExpression} is an invalid cron expression`
        super(message);
        this.name = 'InvalidCronException'
    }
}