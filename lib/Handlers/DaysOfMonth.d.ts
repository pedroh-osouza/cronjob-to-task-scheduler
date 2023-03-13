import { CronData } from "../interfaces/CronData";
import { ScheduleByMonth } from "../interfaces/ScheduleXmlObject";
interface Months {
    [key: string]: any;
}
export declare class DaysOfMonth {
    static getScheduleMonth(cronData: CronData): ScheduleByMonth;
    private static getDays;
    static getMonths(cronData: CronData): Months;
}
export {};
