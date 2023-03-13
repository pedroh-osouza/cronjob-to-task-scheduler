import { CronData } from "../../interfaces/CronData";
import { Triggers } from "../../interfaces/ScheduleXmlObject";
export declare class TimeTrigger {
    static getTrigger(cronData: CronData): Triggers;
}
