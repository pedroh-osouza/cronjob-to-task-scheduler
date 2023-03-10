export class DuplicatedTaskException extends Error
{
    constructor(taskName: string)
    {
        const message = `${taskName} it is an existing task`
        super(message);
        this.name = 'DuplicatedTaskException'
    }
}