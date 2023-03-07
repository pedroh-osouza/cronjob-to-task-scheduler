import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

let data = CronToTaskSchedule.convert('00 07 * * 1-5', 'Open Notepad', 'ipconfig');

console.log(data)