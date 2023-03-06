"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronToTaskSchedule = void 0;
const Daily_1 = require("./Handlers/Daily");
const DaysOfMonth_1 = require("./Handlers/DaysOfMonth");
const DaysOfWeek_1 = require("./Handlers/DaysOfWeek");
const Hours_1 = require("./Handlers/Hours");
const Minutes_1 = require("./Handlers/Minutes");
const Months_1 = require("./Handlers/Months");
class CronToTaskSchedule {
    static convert(cronSyntax, taskName, taskCommand) {
        let command = `schtasks /create /tn "UiPathSchedules\\${taskName}" /tr "cmd /c ${taskCommand}" `;
        const minutes = Minutes_1.Minutes.convert(cronSyntax);
        const hours = Hours_1.Hours.convert(cronSyntax);
        const daysOfMonth = DaysOfMonth_1.DaysOfMonth.convert(cronSyntax);
        const months = Months_1.Months.convert(cronSyntax);
        const daysOfWeek = DaysOfWeek_1.DaysOfWeek.convert(cronSyntax);
        const daily = (minutes != '*' && hours != '*' && daysOfMonth == '*' && months == '*' && daysOfWeek == '*');
        if (daily) {
            let sc = Daily_1.Daily.convert(minutes, hours);
            if (!Array.isArray(sc))
                return command += sc;
            let commands = [];
            sc.forEach(value => {
                commands.push(command + ' ' + value);
            });
            return commands;
        }
    }
}
exports.CronToTaskSchedule = CronToTaskSchedule;
