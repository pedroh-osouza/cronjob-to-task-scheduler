export class SchtasksCommandException extends Error
{
    constructor(message: string)
    {
        super(message);
        this.name = 'SchtasksCommandException'
    }
}