import { ScheduleXmlObject, CalendarTrigger } from "../interfaces/ScheduleXmlObject";
import { js2xml } from 'xml-js';
import fs from 'fs';
import { exec } from 'child_process';
import os from 'os';
import path from 'path';
import { DuplicatedTaskException } from "../Exceptions/DuplicatedTaskException";

export class Task
{
    constructor(public taskName: string, public triggers: CalendarTrigger|CalendarTrigger[], public command: string){}

    schedule()
    {
        this.existsTask(this.taskName)
        this.toSchedule(this.build());
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
                Triggers: {
                    CalendarTrigger: this.triggers
                },
                Actions: {
                    _attributes: {
                        Context: 'Author',
                    },
                    Exec: {
                        Command: {
                            _text: this.command
                        }
                    }
                }
            }
        }
    }

    private async toSchedule(scheduleXmlObject:ScheduleXmlObject)
    {
        const xml = js2xml(scheduleXmlObject, {compact: true, spaces: 4})
        const tempDir = os.tmpdir();
        const xmlFilePath = path.join(tempDir, `${this.taskName}.xml`);
        
        fs.writeFile(xmlFilePath, xml, (err =>{
            if(err) throw new Error('error when scheduling task')

            const command = `schtasks /create /tn "${this.taskName}" /xml "${xmlFilePath}"`;

            exec(command, (error, stdout, stderr) => {
                if (error) throw new Error('error when scheduling task')

                if (stderr) throw new Error('error when scheduling task')

                fs.unlink(xmlFilePath, (err) => {
                    if (err) return
                });
            });
        }))
    }

    private existsTask(taskName: string)
    {
        exec(`schtasks /query /TN "${taskName}"`, (error, stdout, stderr) => {
            if(!error) throw new DuplicatedTaskException(this.taskName);
        });
    }
}