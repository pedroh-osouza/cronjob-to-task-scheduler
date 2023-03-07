import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

let data = CronToTaskSchedule.convert('* * 1,5 * *', 'Open Notepad', 'ipconfig');

console.log(data)