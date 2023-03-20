import { ScheduleXmlObject, Triggers } from "../interfaces/ScheduleXmlObject";
import { js2xml } from 'xml-js';
import fs from 'fs';
import { exec, execSync } from 'child_process';
import os from 'os';
import path from 'path';
import { DuplicatedTaskException } from "../Exceptions/DuplicatedTaskException";
import { XmlException } from "../Exceptions/XmlException";
import { SchtasksCommandException } from "../Exceptions/SchtasksCommandException";

export class Task
{
    constructor(public taskName: string, public triggers: Triggers, public command: string){}

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
                            _text: 'cmd.exe'
                        },
                        Arguments: {
                            _text: `/c ${this.command}` 
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
        const xmlFilePath = path.join(tempDir, `${this.taskName}.xml`);
        
        fs.writeFile(xmlFilePath, xml, (err =>{
            if(err) throw new XmlException('error when creating task xml')

            const command = `schtasks /create /tn "${this.taskName}" /xml "${xmlFilePath}"`;

            exec(command, (error, stdout, stderr) => {
                if(error) throw new SchtasksCommandException('error when running schedule command')

                fs.unlink(xmlFilePath, (err) => {
                    if (err) return
                });
            });
        }))
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