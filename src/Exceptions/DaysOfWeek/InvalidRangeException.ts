export class InvalidRangeDaysOfWeekException extends Error
{
    constructor(message: string) {
        super(message);
        this.name = 'InvalidRangeDaysOfWeekException'
    }
}