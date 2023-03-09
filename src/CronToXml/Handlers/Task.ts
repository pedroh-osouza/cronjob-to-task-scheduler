import { ScheduleXmlObject, CalendarTrigger } from "../interfaces/ScheduleXmlObject";
import { js2xml } from 'xml-js';
import fs from 'fs';
import { exec } from 'child_process';

export class Task
{
    constructor(public taskName: string, public triggers: CalendarTrigger|CalendarTrigger[], public command: string){}

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
        const filenameXml = 'arquivo.xml';
        const xml = js2xml(scheduleXmlObject, {compact: true, spaces: 4})
        
        fs.writeFile(filenameXml, xml, (err =>{

            if(err) throw err;
            const command = `schtasks /create /tn "${this.taskName}" /xml "${filenameXml}"`;

            exec(command, (error, stdout, stderr) => {
                if (error) {
                  console.error(`Erro ao agendar tarefa: ${error.message}`);
                  return;
                }
                if (stderr) {
                  console.error(`Erro ao agendar tarefa: ${stderr}`);
                  return;
                }
                console.log(`Tarefa agendada com sucesso: ${stdout}`);
            }); 
        }));          
    }
}