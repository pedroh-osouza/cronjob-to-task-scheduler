"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCronSyntax = void 0;
class InvalidCronSyntax extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidCronSyntax';
    }
}
exports.InvalidCronSyntax = InvalidCronSyntax;
