import { CronData } from "../../interfaces/CronData";
import { Triggers } from "../../interfaces/ScheduleXmlObject";
export declare class Monthly {
    static getTrigger(cronData: CronData): Triggers;
    private static minute;
    private static hour;
    private static minuteHour;
}
