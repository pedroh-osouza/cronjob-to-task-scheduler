export class XmlException extends Error
{
    constructor(message: string)
    {
        super(message);
        this.name = 'XmlException'
    }
}