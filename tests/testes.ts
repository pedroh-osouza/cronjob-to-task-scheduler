import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

let data = CronToTaskSchedule.convert('00 07 1 1 1', 'TestePedro', 'echo "Teste"');

console.log(data)