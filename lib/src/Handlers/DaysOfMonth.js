"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaysOfMonth = void 0;
const InvalidCronSyntax_1 = require("../Exceptions/InvalidCronSyntax");
const InvalidRangeException_1 = require("../Exceptions/InvalidRangeException");
const InvalidValueException_1 = require("../Exceptions/InvalidValueException");
class DaysOfMonth {
    static convert(cronSynstax) {
        const daysOfMonth = cronSynstax.split(' ')[2];
        let selectedDaysOfMonth = [];
        if ((daysOfMonth == '*') || (/^([1-9]|[12]\d|3[01])$/.test(daysOfMonth)))
            return daysOfMonth;
        if (daysOfMonth.includes(',')) {
            const regex = /^(?:[1-9]|[1-2][0-9]|3[0-1])$/;
            const list = daysOfMonth.split(',');
            list.forEach((value) => {
                if (!regex.test(value))
                    throw new InvalidValueException_1.InvalidValueException(`Value: ${value} is invalid, number required is 1-31`);
                selectedDaysOfMonth.push(value);
            });
            return selectedDaysOfMonth;
        }
        if (daysOfMonth.includes('-')) {
            const match = daysOfMonth.match(/^([1-9]|[12][0-9]|3[01])\D+([1-9]|[12][0-9]|3[01])$/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: 1-31');
            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
            for (let i = firstNumber; i <= secondNumber; i++) {
                selectedDaysOfMonth.push(i.toString());
            }
            return selectedDaysOfMonth;
        }
        if (daysOfMonth.includes('/')) {
            const match = daysOfMonth.match(/^([*])\/([1-31])$/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: */[1-31]');
            console.log('Rule not implemented');
        }
        throw new InvalidCronSyntax_1.InvalidCronSyntax('Invalid Cron Syntax');
    }
    static validate(cronPart) {
        if ((/^([1-9]|[12]\d|3[01])$/.test(cronPart)))
            return true;
        return false;
    }
}
exports.DaysOfMonth = DaysOfMonth;
