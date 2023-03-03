export class InvalidRangeMinutesException extends Error
{
    constructor(message: string) {
        super(message);
        this.name = 'InvalidRangeMinutesException'
    }
}