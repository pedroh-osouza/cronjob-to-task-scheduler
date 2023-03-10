"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrigger = void 0;
const moment_1 = __importDefault(require("moment"));
class TimeTrigger {
    static getTrigger(cronData) {
        const now = (0, moment_1.default)();
        if (!Array.isArray(cronData.minutes)) {
            (cronData.minutes != '*') ? now.set({ minute: Number(cronData.minutes), second: 0 }) : now.set({ minute: now.minute(), second: 0 });
            return {
                TimeTrigger: {
                    Enabled: {
                        _text: true
                    },
                    StartBoundary: {
                        _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                    },
                    Repetition: {
                        Interval: {
                            _text: (cronData.minutes == '*') ? 'PT1M' : 'PT1H'
                        },
                        StopAtDurationEnd: {
                            _text: false
                        }
                    }
                }
            };
        }
        let timeTriggers = [];
        for (let i = 0; i < cronData.minutes.length; i++) {
            now.set({ minute: Number(cronData.minutes[i]), second: 0 });
            let trigger = {
                Enabled: {
                    _text: true
                },
                StartBoundary: {
                    _text: now.format('YYYY-MM-DDTHH:mm:ssZ')
                },
                Repetition: {
                    Interval: {
                        _text: 'PT1H'
                    },
                    StopAtDurationEnd: {
                        _text: false
                    }
                }
            };
            timeTriggers.push(trigger);
        }
        return {
            TimeTrigger: timeTriggers
        };
    }
}
exports.TimeTrigger = TimeTrigger;
