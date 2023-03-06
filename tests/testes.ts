import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

let data = CronToTaskSchedule.convert('00-05 10-12 * * *', 'Open Notepad', 'ipconfig');

console.log(data)