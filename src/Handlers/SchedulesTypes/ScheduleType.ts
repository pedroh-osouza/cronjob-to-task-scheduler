import { CronData } from "../../interfaces/CronData";

export class ScheduleType {
    static selectScheduleType(cronData: CronData) {
        if(cronData.daysOfWeeks != '*' && cronData.daysOfMonths != '*') throw new Error('cannot convert this cron expression')
        if(cronData.daysOfWeeks != '*' && cronData.months != '*') return 'monthlyDayOfWeek'
        if (cronData.daysOfMonths != '*' || cronData.months != '*' && cronData.daysOfWeeks == '*') return 'monthly';
        if (cronData.daysOfWeeks != '*' && cronData.daysOfMonths == '*' && cronData.months == '*') return 'weekly';
        if ((cronData.minutes != '*' || cronData.minutes == '*') && cronData.hours == '*' && cronData.daysOfMonths == '*' && cronData.months == '*' && cronData.daysOfWeeks == '*') return 'time'
        return 'daily'
    }

    static selectScheduleFunction(cronExpression: string) {
        const [minute, hour, dayOfMonth, month, dayOfWeek] = cronExpression.split(' ');

        const fields = [
            { value: minute, name: 'minute' },
            { value: hour, name: 'hour' },
            { value: dayOfMonth, name: 'dayOfMonth' },
            { value: month, name: 'month' },
            { value: dayOfWeek, name: 'dayOfWeek' },
        ];

        const filledFields = fields.filter(({ value }) => value !== '*').map(({ name }) => name);

        if(filledFields.length === 1) return filledFields[0];
        
        let camelCase: string = filledFields[0];

        for(let i = 1; i < filledFields.length; i++)
        {
            const part = (filledFields[i].charAt(0).toUpperCase() + filledFields[i].slice(1))
            camelCase = camelCase + part
        }

        return camelCase;
    }
}
