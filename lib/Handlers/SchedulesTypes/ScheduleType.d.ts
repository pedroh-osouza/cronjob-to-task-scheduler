import { CronData } from "../../interfaces/CronData";
export declare class ScheduleType {
    static selectScheduleType(cronData: CronData): "time" | "monthlyDayOfWeek" | "monthly" | "weekly" | "daily";
    static selectScheduleFunction(cronExpression: string): string;
}
