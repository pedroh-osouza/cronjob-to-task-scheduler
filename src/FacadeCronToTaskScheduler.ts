import { DaysOfMonth } from "./Handlers/DaysOfMonth";
import { DaysOfWeek } from "./Handlers/DaysOfWeek";
import { Hours } from "./Handlers/Hours";
import { Minutes } from "./Handlers/Minutes";
import { Months } from "./Handlers/Months";

export class FacadeCronToTaskScheduler
{
    static convert(cronSyntax: string){

        const minutes = Minutes.convert(cronSyntax);
        const hours = Hours.convert(cronSyntax);
        const daysOfMonth = DaysOfMonth.convert(cronSyntax);
        const months = Months.convert(cronSyntax);
        const daysOfWeek = DaysOfWeek.convert(cronSyntax);

        let data = {
            minutes,
            hours,
            daysOfMonth,
            months,
            daysOfWeek
        };

    }
}