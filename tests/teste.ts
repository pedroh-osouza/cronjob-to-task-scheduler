import { CronToXml } from "../src/CronToXml/FacadeCronToXml"

CronToXml.convert('meuXml', '* 10-15 * 3,4 *', 'notepad.exe')