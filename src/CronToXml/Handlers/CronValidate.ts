export class CronValidator {

    private readonly ranges = [
      [0, 59],  // minute
      [0, 23],  // hour
      [1, 31],  // day of month
      [1, 12],  // month
      [0, 7],   // day of week
    ];
    
    validate(cronExpression: string) : boolean
    {
        this.validateLength(cronExpression);
        this.validateParts(cronExpression);
        return true
    }

    private validateLength(cronExpression: string): boolean 
    {
        const fields = cronExpression.split(' ');

        return (fields.length == 5)
    }

    private validateParts(cronExpression: string): boolean
    {
        const fields = cronExpression.split(' ')

        fields.forEach((value, key)=>{
            let values: string[] = [];

            if(value.includes(',')) values = value.split(',');

            if(value.includes('-')) values = value.split(',');

            if(value.includes('\\')) values = value.split('\\');

            if((values) && (values.length == 2))

            if((Number(value) >= this.ranges[key][0]) || (Number(value) <= this.ranges[key][1])) return true;
        })

        return true
    }
}  