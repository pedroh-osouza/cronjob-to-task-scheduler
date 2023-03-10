"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicatedTaskException = void 0;
class DuplicatedTaskException extends Error {
    constructor(taskName) {
        const message = `${taskName} it is an existing task`;
        super(message);
        this.name = 'DuplicatedTaskException';
    }
}
exports.DuplicatedTaskException = DuplicatedTaskException;
