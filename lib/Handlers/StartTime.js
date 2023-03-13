"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartTime = void 0;
const moment_1 = __importDefault(require("moment"));
class StartTime {
    static convert(minutes, hours) {
        let startTimes = this.hourMinuteToStartTime(minutes, hours);
        return this.startTimesToDate(startTimes);
    }
    static hourMinuteToStartTime(minutes, hours) {
        let startTimes = [];
        if (Array.isArray(minutes) && Array.isArray(hours)) {
            hours.forEach((hour) => {
                minutes.forEach((minute) => {
                    startTimes.push(`${hour}:${minute}`);
                });
            });
            return startTimes;
        }
        if (Array.isArray(minutes) && !Array.isArray(hours)) {
            minutes.forEach((value) => {
                startTimes.push(`${hours.toString()}:${value}`);
            });
            return startTimes;
        }
        if (!Array.isArray(minutes) && Array.isArray(hours)) {
            hours.forEach((value) => {
                startTimes.push(`${value}:${minutes.toString()}`);
            });
            return startTimes;
        }
        return `${hours}:${minutes}`;
    }
    static startTimesToDate(startTimes) {
        const now = (0, moment_1.default)();
        let dates = [];
        if (!Array.isArray(startTimes)) {
            const [hour, minute] = startTimes.split(':');
            now.set({ minute: Number(minute), hour: Number(hour), second: 0 });
            return now.format('YYYY-MM-DDTHH:mm:ssZ');
        }
        for (let i = 0; i < startTimes.length; i++) {
            const [hour, minute] = startTimes[i].split(':');
            now.set({ minute: Number(minute), hour: Number(hour), second: 0 });
            dates.push(now.format('YYYY-MM-DDTHH:mm:ssZ'));
        }
        return dates;
    }
}
exports.StartTime = StartTime;
//# sourceMappingURL=StartTime.js.map