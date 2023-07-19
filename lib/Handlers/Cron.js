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
        fields.forEach((field, index) => {
            const values = this.cronPartToArray(field);
            values.forEach((value) => {
                if (!this.rangeValidate(value, index))
                    throw new InvalidCronException_1.InvalidCronException(cronExpression);
            });
        });
    }
    rangeValidate(value, key) {
        return (Number(value) >= this.ranges[key][0] && Number(value) <= this.ranges[key][1]) || value === '*';
    }
    cronPartToArray(cronPart) {
        if (cronPart.includes(','))
            return cronPart.split(',');
        if (cronPart.includes('-')) {
            const values = cronPart.split('-');
            if (values.length === 2)
                return values;
        }
        if (cronPart.includes('\\')) {
            const values = cronPart.split('\\');
            if (values.length === 2)
                return values;
        }
        return [cronPart];
    }
    toData(cronExpression) {
        this.validate(cronExpression);
        const fields = cronExpression.split(' ');
        let data = [];
        fields.forEach((field) => {
            const values = this.cronPartToArray(field);
            if (field.includes('-')) {
                const firstNumber = Number(values[0]);
                const secondNumber = Number(values[1]);
                let auxArray = [];
                for (let i = firstNumber; i <= secondNumber; i++) {
                    if (i < 10) {
                        auxArray.push('0' + i.toString());
                        continue;
                    }
                    auxArray.push(i.toString());
                }
                data.push(auxArray);
                return;
            }
            if (values.length === 1) {
                data.push(values[0]);
                return;
            }
            data.push(values);
        });
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
//# sourceMappingURL=Cron.js.map