import { CronToXml } from "../src/CronToXml/FacadeCronToXml"

CronToXml.convert('meuXml', '* 15 10 3,4 *', 'notepad.exe')