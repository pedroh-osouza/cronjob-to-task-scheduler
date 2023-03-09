import { CronToTaskSchedule } from "../src/CronToTaskSchedule";
import { CronToXml } from "../src/CronToXml/FacadeCronToXml";

// CronToTaskSchedule.convert('meuXml', '00,30 07,17 * * *', 'notepad.exe')
CronToXml.convert('meuXml', '00,30 07,17 * * *', 'notepad.exe')

