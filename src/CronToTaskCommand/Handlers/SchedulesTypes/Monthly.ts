export class Monthly
{
    static dayOfMonth(daysOfMonths: string|string[])
    {
        const baseSchedule = '/sc monthly /d';

        if(!Array.isArray(daysOfMonths))
        {
            return `${baseSchedule} ${daysOfMonths}`;
        }

        let selectedValues: string[] = []

        daysOfMonths.forEach((value)=>{
            selectedValues.push(`${baseSchedule} ${value}`)
        })

        return selectedValues;
    }

    static minuteDayOfMonth(minutes: string|string[], daysOfMonths:string|string[])
    {
        const baseSchedule = '/sc monthly /d';
        let days: string[] = [];

        if(Array.isArray(daysOfMonths))
        {
            
        }

        //schtasks /create /tn "Minha Tarefa" /tr "C:\caminho\para\meu\programa.exe" /sc monthly /d 1,2 /m * /st 00:01


        throw Error('Rule Not Implemented')
    }
}

