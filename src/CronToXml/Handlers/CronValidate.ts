import { InvalidCronException } from "../Exceptions/InvalidCronException";

export class CronValidator {

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
            let values: string[] = [];

            if(fields[key].includes(',')) values = fields[key].split(',');

            if(fields[key].includes('-')) values = fields[key].split('-');

            if(fields[key].includes('\\')) values = fields[key].split('\\');

            if(values.length === 2)
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
}  