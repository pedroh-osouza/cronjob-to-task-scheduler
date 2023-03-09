import { CronFieldType } from "../../interfaces/EnumCronFieldType";

export class CronDeserializer
{
    private regex: RegExp;

    constructor(private cronPart: string, private cronFieldType: CronFieldType)
    {
        this.regex = new RegExp(this.cronFieldType)
        if(this.cronPart.includes(',')) this.listSeparator();
        if(this.cronPart.includes('-')) this.rangeOfValues();
        if(this.cronPart.includes('//')) this.stepValues();
        this.anyValue()
    }

    anyValue(): string | string[] 
    {
        if((this.cronPart == '*') || (this.regex.test(this.cronPart))) return this.cronPart
        throw new Error('Error')
    }

    listSeparator(): string | string[] 
    {
        const list = this.cronPart.split(',');
        let selectedValues: string[] = [];

        list.forEach(value => {
            if(!this.regex.test(value)) throw new Error('Error')
            selectedValues.push(value);
        });

        if(!selectedValues) throw new Error('Error')
        return selectedValues;
    }

    rangeOfValues(): string | string[] 
    {
        const list = this.cronPart.split('-');
        if(list.length != 2) throw new Error('Error')

        const [firstNumber, secondNumber ] = list;

        let selectedValues: string[] = [];
        for(let i = Number(list[0]); i <= Number(list[1]); i++)
        {
            if(i > 10) selectedValues.push(i.toString());

            selectedValues.push('0'.concat(i.toString()))
        }

        if(!selectedValues) throw new Error('Error')
        return selectedValues;
    }

    stepValues()
    {
        throw new Error('Error')
    }
}