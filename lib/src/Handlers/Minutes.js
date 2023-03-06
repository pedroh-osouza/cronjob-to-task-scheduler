"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minutes = void 0;
const InvalidCronSyntax_1 = require("../Exceptions/InvalidCronSyntax");
const InvalidRangeException_1 = require("../Exceptions/InvalidRangeException");
const InvalidValueException_1 = require("../Exceptions/InvalidValueException");
class Minutes {
    static convert(cronSynstax) {
        const minutes = cronSynstax.split(' ')[0];
        let selectedMinutes = [];
        if ((minutes == '*') || (/^([0-5][0-9])$/.test(minutes)))
            return minutes;
        if (minutes.includes(',')) {
            const list = minutes.split(',');
            const regex = /^(?:[0-9]|[1-5][0-9])$/;
            list.forEach(value => {
                if (!regex.test(value))
                    throw new InvalidValueException_1.InvalidValueException(`Value: ${value} is invalid, number required is 0-59`);
                selectedMinutes.push(value);
            });
            return selectedMinutes;
        }
        if (minutes.includes('-')) {
            const match = minutes.match(/^([0-9]|[1-5][0-9])-([0-9]|[1-5][0-9])$/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: 0-59');
            const firstNumber = Number(match[1]);
            const secondNumber = Number(match[2]);
            for (let i = firstNumber; i <= secondNumber; i++) {
                selectedMinutes.push(i.toString());
            }
            return selectedMinutes;
        }
        if (minutes.includes('/')) {
            const match = minutes.match(/^([*])\/([0-59])$/);
            if (!match)
                throw new InvalidRangeException_1.InvalidRangeException('Invalid range, correct: */[0-59]');
            console.log('Rule not implemented');
        }
        throw new InvalidCronSyntax_1.InvalidCronSyntax('Invalid Cron Syntax');
    }
    static validate(minutes) {
        if (/^([0-5][0-9])$/.test(minutes))
            return true;
        return false;
    }
}
exports.Minutes = Minutes;
