"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const xml_js_1 = require("xml-js");
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const DuplicatedTaskException_1 = require("../Exceptions/DuplicatedTaskException");
class Task {
    constructor(taskName, triggers, command, workingDirectory) {
        this.taskName = taskName;
        this.triggers = triggers;
        this.command = command;
        this.workingDirectory = workingDirectory;
    }
    schedule() {
        if (this.existsTask(this.taskName))
            return false;
        const scheduleXmlObject = this.build();
        this.toSchedule(scheduleXmlObject);
        return true;
    }
    build() {
        return {
            _declaration: {
                _attributes: {
                    version: '1.0',
                    encoding: 'UTF-16',
                }
            },
            Task: {
                _attributes: {
                    xmlns: 'http://schemas.microsoft.com/windows/2004/02/mit/task',
                    version: '1.2',
                },
                Triggers: this.triggers,
                Actions: {
                    _attributes: {
                        Context: 'Author',
                    },
                    Exec: {
                        Command: {
                            _text: this.command.command
                        },
                        Arguments: {
                            _text: this.command.arguments || ''
                        },
                        WorkingDirectory: {
                            _text: this.workingDirectory || ''
                        }
                    }
                },
                Settings: {
                    ExecutionTimeLimit: {
                        _text: 'PT0S'
                    },
                    RestartOnFailure: {
                        Interval: {
                            _text: 'PT5M'
                        },
                        Count: {
                            _text: 1
                        }
                    }
                }
            }
        };
    }
    toSchedule(scheduleXmlObject) {
        const xml = (0, xml_js_1.js2xml)(scheduleXmlObject, { compact: true, spaces: 4 });
        const tempDir = os_1.default.tmpdir();
        const xmlFilePath = path_1.default.join(tempDir, `tempTask.xml`);
        try {
            const command = `schtasks /create /tn "${this.taskName}" /xml ${xmlFilePath}`;
            fs_1.default.writeFileSync(xmlFilePath, xml);
            (0, child_process_1.execSync)(command, { stdio: 'ignore' });
            fs_1.default.unlinkSync(xmlFilePath);
        }
        catch (e) {
            throw e;
        }
    }
    existsTask(taskName) {
        try {
            (0, child_process_1.execSync)(`schtasks /query /TN "${taskName}"`, { stdio: 'ignore' });
        }
        catch (error) {
            return false;
        }
        throw new DuplicatedTaskException_1.DuplicatedTaskException(taskName);
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map