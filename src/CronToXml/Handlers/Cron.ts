import { InvalidCronException } from "../Exceptions/InvalidCronException";
import { CronData } from "../interfaces/CronData";

export class Cron {

    private readonly ranges = [
      [0, 59],  // minute
      [0, 23],  // hour
      [1, 31],  // day of month
      [1, 12],  // month
      [0, 7],   // day of week
    ];
    
    validate(cronExpression: string) : void
    {
        this.validateLength(cronExpression);
        this.validateParts(cronExpression);
    }

    private validateLength(cronExpression: string): void 
    {
        if(cronExpression.split(' ').length != 5) throw new InvalidCronException(cronExpression);
    }

    private validateParts(cronExpression: string): void
    { 
        const fields = cronExpression.split(' ');

        for(const index in fields)
        {
            let key = Number(index)
            const values = this.cronPartToArray(fields[key]);

            if(values)
            {   
                const firstNumberValidate = this.rangeValidate(values[0], key);
                const secondNumberValidate = this.rangeValidate(values[1], key);
                if(!(firstNumberValidate && secondNumberValidate)) throw new InvalidCronException(cronExpression);
                continue;
            }

            if(!this.rangeValidate(fields[key], key)) throw new InvalidCronException(cronExpression);
        }
    }

    private rangeValidate(value: string, key: number): boolean
    {
        return (Number(value) >= this.ranges[key][0] && Number(value) <= this.ranges[key][1]) || value === '*'
    }

    private cronPartToArray(cronPart: string): string[]|undefined
    {
        let values: string[] = [];

        if(cronPart.includes(',')) values = cronPart.split(',');

        if(cronPart.includes('-')) values = cronPart.split('-');

        if(cronPart.includes('\\')) values = cronPart.split('\\');

        if(values.length === 2) return values;
    }

    toData(cronExpression: string): CronData
    {
        this.validate(cronExpression);
        const fields: string[] = cronExpression.split(' ');

        let data: Array<string[]|string> = []

        for(const index in fields)
        {
            let key = Number(index)
            const values = this.cronPartToArray(fields[key]);

            if(values)
            {
                if(fields[key].includes(',')) data[key] = values;
                if(fields[key].includes('-'))
                {
                    let auxArray = [];
                    for(let i; i = Number(values[0]); i <= Number(values[1]))
                    {
                        if(i<10) auxArray.push('0'+i.toString());
                        auxArray.push(i.toString())
                    }
                }
                continue;
            }

            data[key] = fields[key];
        }

        return {
            minutes: data[0],
            hours: data[1],
            daysOfMonths: data[2],
            months: data[3],
            daysOfWeeks: data[4]
        }
    }
}  