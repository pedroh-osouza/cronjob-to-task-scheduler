import { CronData } from "../interfaces/CronData";
import { ScheduleByWeek } from "../interfaces/ScheduleXmlObject";
interface Weeks {
    [key: string]: any;
}
export declare class DaysOfWeek {
    static getScheduleWeek(cronData: CronData): ScheduleByWeek;
    static getWeeks(cronData: CronData): Weeks;
}
export {};
