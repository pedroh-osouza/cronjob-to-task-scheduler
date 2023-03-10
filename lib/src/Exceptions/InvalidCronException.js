"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCronException = void 0;
class InvalidCronException extends Error {
    constructor(cronExpression) {
        const message = `${cronExpression} is an invalid cron expression`;
        super(message);
        this.name = 'InvalidCronException';
    }
}
exports.InvalidCronException = InvalidCronException;
