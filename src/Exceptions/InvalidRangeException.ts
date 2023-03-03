export class InvalidRangeException extends Error
{
    constructor(message: string)
    {
        super(message);
        this.name = 'InvalidRangeException';
    }
}