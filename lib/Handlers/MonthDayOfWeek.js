"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthDayOfWeek = void 0;
const DaysOfMonth_1 = require("./DaysOfMonth");
const DaysOfWeek_1 = require("./DaysOfWeek");
class MonthDayOfWeek {
    static getScheduleMonthDayOfWeek(cronData) {
        const daysOfWeek = DaysOfWeek_1.DaysOfWeek.getWeeks(cronData);
        const months = DaysOfMonth_1.DaysOfMonth.getMonths(cronData);
        const scheduleByWeek = {
            DaysOfWeek: daysOfWeek,
            Months: months,
            Weeks: {
                Week: [
                    { _text: 1 }, { _text: 2 }, { _text: 3 }, { _text: 4 },
                ]
            }
        };
        return scheduleByWeek;
    }
}
exports.MonthDayOfWeek = MonthDayOfWeek;
//# sourceMappingURL=MonthDayOfWeek.js.map