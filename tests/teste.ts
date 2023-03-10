import { CronToXml } from "../src/CronToXml/FacadeCronToXml"

CronToXml.convert('meuXml', '00 10 * * 1-5', 'notepad.exe')