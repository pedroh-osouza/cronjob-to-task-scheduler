import { CronToXml } from "../src/CronToXml/FacadeCronToXml"

CronToXml.convert('meuXml', '0-5 10-12 1-5 * *', 'notepad.exe')