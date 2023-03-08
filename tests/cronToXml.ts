import { CronToXml } from "../src/CronToXml/FacadeCronToXml";

CronToXml.convert('MyTask', '00 07 * * 1-5', 'echo "Teste"')
