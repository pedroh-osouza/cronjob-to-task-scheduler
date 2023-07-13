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
    
    private validate(cronExpression: string) : void
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

        fields.forEach((field, index) => {

            const values = this.cronPartToArray(field);
            
            values.forEach((value) => {
                if(!this.rangeValidate(value, index)) throw new InvalidCronException(cronExpression);
            })
        });
    }

    private rangeValidate(value: string, key: number): boolean
    {
        return (Number(value) >= this.ranges[key][0] && Number(value) <= this.ranges[key][1]) || value === '*'
    }

    private cronPartToArray(cronPart: string): string[]
    {
        if(cronPart.includes(',')) return cronPart.split(',');

        if(cronPart.includes('-')) 
        {
            const values = cronPart.split('-');
            if(values.length === 2) return values;
        }

        if(cronPart.includes('\\')) 
        {
            const values = cronPart.split('\\');
            if(values.length === 2) return values;
        }

        return [cronPart];
    }

    toData(cronExpression: string): CronData
    {
        this.validate(cronExpression);

        const fields = cronExpression.split(' ');

        let data: Array<string[]|string> = []

        fields.forEach((field) => {

            const values = this.cronPartToArray(field);
            
            if(field.includes('-')) {
                const firstNumber = Number(values[0]);
                const secondNumber = Number(values[1]);
                let auxArray = [];
                for(let i = firstNumber; i <= secondNumber; i++)
                {
                    if(i < 10) 
                    {
                        auxArray.push('0'+i.toString());
                        continue;
                    }
                    auxArray.push(i.toString())
                }
                data.push(auxArray);
                return;
            }

            if(values.length === 1) {
                data.push(values[0]);
                return;
            }

            data.push(values);
        })

        console.log({
            minutes: data[0],
            hours: data[1],
            daysOfMonths: data[2],
            months: data[3],
            daysOfWeeks: data[4]
        })
        return {
            minutes: data[0],
            hours: data[1],
            daysOfMonths: data[2],
            months: data[3],
            daysOfWeeks: data[4]
        }
    }
}  