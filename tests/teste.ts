import { CronToXml } from "../src/CronToXml/FacadeCronToXml";

CronToXml.convert('MyTask', '00 07 * * *', 'notepad.exe')