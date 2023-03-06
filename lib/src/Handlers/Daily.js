"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Daily = void 0;
const Hours_1 = require("./Hours");
const Minutes_1 = require("./Minutes");
class Daily {
    static convert(minutes, hours) {
        const baseDaily = '/sc daily /ST';
        if (Array.isArray(minutes) && Array.isArray(hours)) {
            if (minutes.length == hours.length) {
                const startTimes = [];
                hours.forEach((hour) => {
                    minutes.forEach((minute) => {
                        console.log(hour, minute);
                        startTimes.push(`${baseDaily} ${hour}:${minute}`);
                    });
                });
                return startTimes;
            }
        }
        if (Minutes_1.Minutes.validate(minutes.toString()) && Hours_1.Hours.validate(hours.toString())) {
            return `${baseDaily} ${hours}:${minutes}`;
        }
    }
}
exports.Daily = Daily;
