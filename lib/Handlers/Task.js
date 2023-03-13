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
    constructor(taskName, triggers, command) {
        this.taskName = taskName;
        this.triggers = triggers;
        this.command = command;
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
                            _text: 'cmd.exe'
                        },
                        Arguments: {
                            _text: `/c ${this.command}`
                        }
                    }
                }
            }
        };
    }
    toSchedule(scheduleXmlObject) {
        const xml = (0, xml_js_1.js2xml)(scheduleXmlObject, { compact: true, spaces: 4 });
        const tempDir = os_1.default.tmpdir();
        const xmlFilePath = path_1.default.join(tempDir, `${this.taskName}.xml`);
        fs_1.default.writeFile(xmlFilePath, xml, (err => {
            if (err)
                throw new Error('error when scheduling task');
            const command = `schtasks /create /tn "${this.taskName}" /xml "${xmlFilePath}"`;
            (0, child_process_1.exec)(command, (error, stdout, stderr) => {
                fs_1.default.unlink(xmlFilePath, (err) => {
                    if (err)
                        return;
                });
            });
        }));
    }
    existsTask(taskName) {
        try {
            (0, child_process_1.execSync)(`schtasks /query /TN "${taskName}"`);
        }
        catch (error) {
            return false;
        }
        throw new DuplicatedTaskException_1.DuplicatedTaskException(taskName);
    }
}
exports.Task = Task;
//# sourceMappingURL=Task.js.map