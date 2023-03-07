import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

let data = CronToTaskSchedule.convert('* 13-14 * * *', 'Open Notepad', 'ipconfig');

console.log(data)