"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRangeException = void 0;
class InvalidRangeException extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidRangeException';
    }
}
exports.InvalidRangeException = InvalidRangeException;
