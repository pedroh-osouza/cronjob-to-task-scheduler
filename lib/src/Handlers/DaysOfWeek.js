"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfWeek = void 0;
const InvalidCronSyntax_1 = require("../Exceptions/InvalidCronSyntax");
const InvalidRangeException_1 = require("../Exceptions/InvalidRangeException");
const InvalidValueException_1 = require("../Exceptions/InvalidValueException");
class DaysOfWeek {
    static convert(cronSynstax) {
        const daysOfWeek = cronSynstax.split(' ')[4];
        let selectedDaysOfWeek = [];
        const daysOfWeekName = {
            '0': 'SUN',
            '1': 'MON',
            '2': 'TUE',
            '3': 'WED',
            '4': 'THUR',
            '5': 'FRI',
            '6': 'SAT',
            '7': 'SUN'
        };
        if ((daysOfWeek == '*') || (/^(0?[0-7])$/.test(daysOfWeek)))
            return daysOfWeek;
        if (daysOfWeek.includes(',')) {
            const list = daysOfWeek.split(',');
            const regex = /^(?:[0-7])$/;
            list.forEach((value) => {
                if (!regex.test(value))
                    throw new InvalidValueException_1.InvalidValueException(`Value: ${value} is invalid, number required is 0-7`);
                selectedDaysOfWeek.push(daysOfWeekName[value]);
            });
            return selectedDaysOfWeek;
        }
        if (daysOfWeek.includes('-')) {
            const match = daysOfWeek.match(/([0-7])-([0-7])/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: 0-7');
            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
            for (let i = firstNumber; i <= secondNumber; i++) {
                selectedDaysOfWeek.push(daysOfWeekName[i]);
            }
            return selectedDaysOfWeek;
        }
        if (daysOfWeek.includes('/')) {
            const match = daysOfWeek.match(/^([*])\/([0-7])$/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: */[0-7]');
            console.log('Rule not implemented');
        }
        throw new InvalidCronSyntax_1.InvalidCronSyntax('Invalid Cron Syntax');
    }
    static validate(cronPart) {
        if ((/^(0?[0-7])$/.test(cronPart)))
            return true;
        return false;
    }
}
exports.DaysOfWeek = DaysOfWeek;
