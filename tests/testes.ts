import { FacadeCronToTaskScheduler } from "../src/CronToCommand/FacadeCronToTaskScheduler";

let data = FacadeCronToTaskScheduler.convert('00 07 1 1 1', 'TestePedro', 'echo "Teste"');

console.log(data)