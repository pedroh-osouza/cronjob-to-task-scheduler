import { ScheduleXmlObject, Triggers } from "../interfaces/ScheduleXmlObject";
import { js2xml } from 'xml-js';
import fs from 'fs';
import { execSync } from 'child_process';
import os from 'os';
import path from 'path';
import { DuplicatedTaskException } from "../Exceptions/DuplicatedTaskException";
import { Exec } from "../interfaces/Exec";

export class Task
{
    constructor(public taskName: string, public triggers: Triggers, public command: Exec, public workingDirectory?: string){}

    schedule(): boolean
    {
        if(this.existsTask(this.taskName)) return false
        const scheduleXmlObject = this.build();
        this.toSchedule(scheduleXmlObject);
        return true;
    }

    private build(): ScheduleXmlObject
    {
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
        }
    }

    private toSchedule(scheduleXmlObject:ScheduleXmlObject)
    {
        const xml = js2xml(scheduleXmlObject, {compact: true, spaces: 4})
        const tempDir = os.tmpdir();
        const xmlFilePath = path.join(tempDir, `tempTask.xml`);
        
        try{
            const command = `schtasks /create /tn "${this.taskName}" /xml ${xmlFilePath}`
            fs.writeFileSync(xmlFilePath, xml);
            execSync(command, {stdio: 'ignore'});
            fs.unlinkSync(xmlFilePath);
        } catch(e) {
            throw e;
        }
    }

    private existsTask(taskName: string): boolean
    {
        try {
            execSync(`schtasks /query /TN "${taskName}"`, {stdio: 'ignore'})
        } catch (error) {
            return false;
        }

        throw new DuplicatedTaskException(taskName);
    }
}