import { CronToXml } from "../src/CronToXml/FacadeCronToXml"

CronToXml.convert('meuXml', '* * 1-5 1,3 *', 'notepad.exe')