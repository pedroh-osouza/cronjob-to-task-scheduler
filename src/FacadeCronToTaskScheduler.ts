import { DaysOfMonth } from "./Handlers/DaysOfMonth";
import { DaysOfWeek } from "./Handlers/DaysOfWeek";
import { Hours } from "./Handlers/Hours";
import { Minutes } from "./Handlers/Minutes";
import { Months } from "./Handlers/Months";

export class FacadeCronToTaskScheduler
{
    static convert(cronSyntax: string, taskName: string, taskCommand: string){

        let command = `schtasks /create /tn "UipathSchedules\\${taskName}" /tr "cmd /c ${taskCommand}"`;
        
        const data = {
            minutes : Minutes.convert(cronSyntax),
            hours : Hours.convert(cronSyntax),
            daysOfMonth : DaysOfMonth.convert(cronSyntax),
            months : Months.convert(cronSyntax),
            daysOfWeek : DaysOfWeek.convert(cronSyntax)
        };

        return data;
    }
}