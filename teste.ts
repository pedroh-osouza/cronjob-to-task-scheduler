import { js2xml } from 'xml-js';
import * as fs from 'fs';

const objeto = {
    _declaration: {
        _attributes: {
            version: '1.0',
            encoding: 'UTF-16'
        }
    },
    Task: {
        _attributes: {
            version: '1.2',
            xmlns: 'http://schemas.microsoft.com/windows/2004/02/mit/task'
        },
        Triggers: {
            CalendarTrigger: {
                StartBoundary: {
                    _text: '2023-03-08T12:57:25'
                },
                Enabled: {
                    _text: 'true'
                },
                ScheduleByDay: {
                    DaysInterval: {
                        _text: 1
                    }
                }
            }
        },
        Actions: {
            _attributes: {
                Context: 'Author'
            },
            Exec: {
                Command: {
                    _text: 'notepad.exe'
                }
            }
        }
    },
};

const options = { compact: true, ignoreComment: true, spaces: 4};
const xml = js2xml(objeto, options);
console.log(xml);

fs.writeFileSync('meu.xml', xml)