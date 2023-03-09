import { ScheduleXmlObject, Trigger } from "../interfaces/ScheduleXmlObject";
import { js2xml } from 'xml-js';

export class Task
{
    constructor(public taskName: string, public triggers: Trigger|Trigger[], public command: string){}

    schedule()
    {
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
                Triggers: this.triggers,
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

    private toSchedule(scheduleXmlObject:ScheduleXmlObject)
    {
        const xml = js2xml(scheduleXmlObject, {compact: true, spaces: 4})
        const fs = require('fs');

        fs.writeFile('arquivo.xml', xml, function(err: Error) {
            if (err) throw err;
            console.log('Arquivo salvo com sucesso!');
        });       
    }
}