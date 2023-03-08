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
            CalendarTrigger: [
                {
                    _text: '0'
                },
                {
                    _text:'1'
                }
            ],
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

fs.writeFileSync('meu.xml', xml)