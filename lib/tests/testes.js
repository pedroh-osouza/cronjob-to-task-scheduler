"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CronToTaskSchedule_1 = require("../src/CronToTaskSchedule");
let data = CronToTaskSchedule_1.CronToTaskSchedule.convert('0-5 23,12 * * *', 'Open Notepad', 'ipconfig');
console.log(data);
