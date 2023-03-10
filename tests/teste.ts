import { CronToXml } from "../src/CronToXml/FacadeCronToXml"

CronToXml.convert('meuXml', '* 10 * * 1-5', 'notepad.exe')