import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

let data = CronToTaskSchedule.convert('* 19 * * *', 'Open Notepad', 'ipconfig');

console.log(data)