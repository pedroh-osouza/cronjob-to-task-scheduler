import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

let data = CronToTaskSchedule.convert('05-10 * * * *', 'Open Notepad', 'ipconfig');

console.log(data)