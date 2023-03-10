"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfMonth = void 0;
class DaysOfMonth {
    static getScheduleMonth(cronData) {
        const days = this.getDays(cronData);
        const months = this.getMonths(cronData);
        const scheduleByMonth = {
            DaysOfMonth: {
                Day: days
            },
            Months: months
        };
        return scheduleByMonth;
    }
    static getDays(cronData) {
        let days = [];
        if (cronData.daysOfMonths === '*') {
            for (let i = 1; i <= 31; i++) {
                const day = {
                    _text: i
                };
                days.push(day);
            }
            return days;
        }
        if (Array.isArray(cronData.daysOfMonths)) {
            for (let i = 0; i < cronData.daysOfMonths.length; i++) {
                const day = {
                    _text: Number(cronData.daysOfMonths[i])
                };
                days.push(day);
            }
            return days;
        }
        ;
        return {
            _text: Number(cronData.daysOfMonths)
        };
    }
    static getMonths(cronData) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const selectedMonths = {};
        if (!Array.isArray(cronData.months)) {
            if (cronData.months === '*') {
                for (const month of months)
                    selectedMonths[month] = undefined;
                return selectedMonths;
            }
            const monthName = months[Number(cronData.months) - 1];
            selectedMonths[monthName] = undefined;
            return selectedMonths;
        }
        for (let i = 0; i < cronData.months.length; i++) {
            const monthName = months[Number(cronData.months[i]) - 1];
            selectedMonths[monthName] = undefined;
        }
        return selectedMonths;
    }
}
exports.DaysOfMonth = DaysOfMonth;
