"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cron = void 0;
const InvalidCronException_1 = require("../Exceptions/InvalidCronException");
class Cron {
    constructor() {
        this.ranges = [
            [0, 59],
            [0, 23],
            [1, 31],
            [1, 12],
            [0, 7], // day of week
        ];
    }
    validate(cronExpression) {
        this.validateLength(cronExpression);
        this.validateParts(cronExpression);
    }
    validateLength(cronExpression) {
        if (cronExpression.split(' ').length != 5)
            throw new InvalidCronException_1.InvalidCronException(cronExpression);
    }
    validateParts(cronExpression) {
        const fields = cronExpression.split(' ');
        for (const index in fields) {
            let key = Number(index);
            const values = this.cronPartToArray(fields[key]);
            if (values) {
                const firstNumberValidate = this.rangeValidate(values[0], key);
                const secondNumberValidate = this.rangeValidate(values[1], key);
                if (!(firstNumberValidate && secondNumberValidate))
                    throw new InvalidCronException_1.InvalidCronException(cronExpression);
                continue;
            }
            if (!this.rangeValidate(fields[key], key))
                throw new InvalidCronException_1.InvalidCronException(cronExpression);
        }
    }
    rangeValidate(value, key) {
        return (Number(value) >= this.ranges[key][0] && Number(value) <= this.ranges[key][1]) || value === '*';
    }
    cronPartToArray(cronPart) {
        let values = [];
        if (cronPart.includes(','))
            values = cronPart.split(',');
        if (cronPart.includes('-'))
            values = cronPart.split('-');
        if (cronPart.includes('\\'))
            values = cronPart.split('\\');
        if (values.length === 2)
            return values;
    }
    toData(cronExpression) {
        this.validate(cronExpression);
        const fields = cronExpression.split(' ');
        let data = [];
        for (const index in fields) {
            let key = Number(index);
            const values = this.cronPartToArray(fields[key]);
            if (values) {
                if (fields[key].includes(',')) {
                    data.push(values);
                }
                ;
                if (fields[key].includes('-')) {
                    const firstNumber = Number(values[0]);
                    const secondNumber = Number(values[1]);
                    let auxArray = [];
                    for (let i = firstNumber; i <= secondNumber; i++) {
                        if (i < 10)
                            auxArray.push('0' + i.toString());
                        auxArray.push(i.toString());
                    }
                    data.push(auxArray);
                }
                continue;
            }
            data[key] = fields[key];
        }
        return {
            minutes: data[0],
            hours: data[1],
            daysOfMonths: data[2],
            months: data[3],
            daysOfWeeks: data[4]
        };
    }
}
exports.Cron = Cron;
