import { Daily } from "./Handlers/SchedulesTypes/Daily";
import { DaysOfMonth } from "./Handlers/DaysOfMonth";
import { DaysOfWeek } from "./Handlers/DaysOfWeek";
import { Hours } from "./Handlers/Hours";
import { Minutes } from "./Handlers/Minutes";
import { Months } from "./Handlers/Months";

export class CronToTaskSchedule
{
    static convert(cronSyntax: string, taskName: string, taskCommand: string){

        let command = `schtasks /create /tn "UiPathSchedules\\${taskName}" /tr "cmd /c ${taskCommand}" `;
        
        const minutes = Minutes.convert(cronSyntax);
        const hours = Hours.convert(cronSyntax);
        const daysOfMonth = DaysOfMonth.convert(cronSyntax);
        const months = Months.convert(cronSyntax);
        const daysOfWeek = DaysOfWeek.convert(cronSyntax);
        
        const daily: Boolean = (minutes != '*' && hours != '*' && daysOfMonth == '*' && months == '*' && daysOfWeek == '*')
        console.log(minutes, hours)
        if(daily)
        {
            let sc = Daily.convert(minutes, hours);

            if(!Array.isArray(sc)) return command += sc;

            let commands: string[] = []
            sc.forEach(value => {
                commands.push(command + ' ' + value)
            });

            return commands
        }  
        
    }
}