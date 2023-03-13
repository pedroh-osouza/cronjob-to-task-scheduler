import { CronData } from "../../interfaces/CronData";
import { Triggers } from "../../interfaces/ScheduleXmlObject";
export declare class Daily {
    static getTrigger(cronData: CronData): Triggers;
    private static minuteHour;
    private static hour;
}
