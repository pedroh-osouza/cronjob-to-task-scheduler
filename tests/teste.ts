import { CronToXml } from "../src/CronToXml/FacadeCronToXml"

CronToXml.convert('meuXml', '00 07 * 3,4 *', 'notepad.exe')