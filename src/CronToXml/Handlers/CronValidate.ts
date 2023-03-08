export class CronValidator {

    private readonly ranges = [
      [0, 59],  // minute
      [0, 23],  // hour
      [1, 31],  // day of month
      [1, 12],  // month
      [0, 7],   // day of week
    ];
    
    isValid(cronExpression: string) : boolean
    {
        return ((!this.validateLength(cronExpression)) && !this.validateParts(cronExpression)) 
    }

    private validateLength(cronExpression: string): boolean 
    {
        return (cronExpression.split(' ').length == 5);
    }

    private validateParts(cronExpression: string): boolean
    {
        let errors: string[] = [];
        cronExpression.split(' ').forEach((value, key)=>{

            let values: string[] = [];

            if(value.includes(',')) values = value.split(',');

            if(value.includes('-')) values = value.split('-');

            if(value.includes('\\')) values = value.split('\\');

            if(values.length === 2)
            {   
                const firstNumberValidate = this.rangeValidate(values[0], key);
                const secondNumberValidate = this.rangeValidate(values[1], key);
                if(!(firstNumberValidate && secondNumberValidate)) errors.push('error');
            };
            
            if(!this.rangeValidate(value, key)) errors.push('error');
        })

        return errors.length != 0;
    }

    private rangeValidate(value: string, key: number): boolean
    {
        return Number(value) >= this.ranges[key][0] || Number(value) <= this.ranges[key][1] || value === '*'
    }
}  