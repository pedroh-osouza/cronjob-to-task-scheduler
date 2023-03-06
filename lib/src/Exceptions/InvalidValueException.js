"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidValueException = void 0;
class InvalidValueException extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidValueException';
    }
}
exports.InvalidValueException = InvalidValueException;
