"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeek = void 0;
class DaysOfWeek {
    static getScheduleWeek(cronData) {
        const weeks = this.getWeeks(cronData);
        const scheduleByWeek = {
            DaysOfWeek: weeks
        };
        return scheduleByWeek;
    }
    static getWeeks(cronData) {
        const daysOfWeekName = {
            '0': 'Sunday',
            '1': 'Monday',
            '2': 'Tuesday',
            '3': 'Wednesday',
            '4': 'Thursday',
            '5': 'Friday',
            '6': 'Saturday',
            '7': 'Sunday',
        };
        const selectedWeeks = {};
        if (!Array.isArray(cronData.daysOfWeeks)) {
            if (cronData.daysOfWeeks === '*') {
                for (let i = 0; i < 7; i++)
                    selectedWeeks[daysOfWeekName[i.toString()]] = undefined;
                return selectedWeeks;
            }
            const weekName = daysOfWeekName[cronData.daysOfWeeks];
            selectedWeeks[weekName] = undefined;
            return selectedWeeks;
        }
        for (const dayOfWeek of cronData.daysOfWeeks) {
            const key = String(Number(dayOfWeek));
            const weekName = daysOfWeekName[key];
            selectedWeeks[weekName] = undefined;
        }
        return selectedWeeks;
    }
}
exports.DaysOfWeek = DaysOfWeek;
