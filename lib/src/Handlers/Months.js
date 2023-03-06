"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Months = void 0;
const InvalidCronSyntax_1 = require("../Exceptions/InvalidCronSyntax");
const InvalidRangeException_1 = require("../Exceptions/InvalidRangeException");
const InvalidValueException_1 = require("../Exceptions/InvalidValueException");
class Months {
    static convert(cronSynstax) {
        const months = cronSynstax.split(' ')[3];
        let selectedMonths = [];
        if ((months == '*') || (/^(0?[1-9]|1[0-2])$/.test(months)))
            return months;
        if (months.includes(',')) {
            const list = months.split(',');
            const regex = /^(1[0-2]|[1-9])$/;
            list.forEach((value) => {
                if (!regex.test(value))
                    throw new InvalidValueException_1.InvalidValueException(`Value: ${value} is invalid, number required is 1-12`);
                selectedMonths.push(value);
            });
            return selectedMonths;
        }
        if (months.includes('-')) {
            const match = months.match(/^(1[0-2]|[1-9])-(1[0-2]|[1-9])$/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: 1-12');
            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
            for (let i = firstNumber; i <= secondNumber; i++) {
                selectedMonths.push(i.toString());
            }
            return selectedMonths;
        }
        if (months.includes('/')) {
            const match = months.match(/^([*])\/([1-12])$/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: */[1-12]');
            console.log('Rule not implemented');
        }
        throw new InvalidCronSyntax_1.InvalidCronSyntax('Invalid Cron Syntax');
    }
    static validate(minutes) {
        if (/^(0?[1-9]|1[0-2])$/.test(minutes))
            return true;
        return false;
    }
}
exports.Months = Months;
