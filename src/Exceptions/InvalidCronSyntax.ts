export class InvalidCronSyntax extends Error
{
    constructor(message: string)
    {
        super(message);
        this.name = 'InvalidCronSyntax';
    }
}