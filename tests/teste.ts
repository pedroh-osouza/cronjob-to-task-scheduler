import { CronToXml } from "../src/CronToXml/FacadeCronToXml";

CronToXml.convert('meuXml', '00,30 07,17 * * *', 'notepad.exe')