import { CronData } from "../../interfaces/CronData";
import { CalendarTrigger, Triggers } from "../../interfaces/ScheduleXmlObject";
export declare class MonthlyDayOfWeek {
    static getTrigger(cronData: CronData): Triggers | {
        CalendarTrigger: {
            Enabled: {
                _text: boolean;
            };
            StartBoundary: {
                _text: string;
            };
            ScheduleByMonthDayOfWeek: import("../../interfaces/ScheduleXmlObject").ScheduleByMonthDayOfWeek;
        };
    } | {
        CalendarTrigger: CalendarTrigger[];
    };
    private static minute;
    private static hour;
    private static minuteHour;
}
