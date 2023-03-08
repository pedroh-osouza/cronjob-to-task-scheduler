import { CronToXml } from "../src/CronToXml/FacadeCronToXml";

CronToXml.convert('MyTask', 'a,59 00,23 * * 1-5', 'echo "Teste"')

// const objeto = {
//     _declaration: {
//         _attributes: {
//             version: '1.0',
//             encoding: 'UTF-16'
//         }
//     },
//     Task: {
//         _attributes: {
//             version: '1.2',
//             xmlns: 'http://schemas.microsoft.com/windows/2004/02/mit/task'
//         },
//         Triggers: {
//             CalendarTrigger: [
//                 {
//                     _text: '0'
//                 },
//                 {
//                     _text:'1'
//                 }
//             ],
//         },
//         Actions: {
//             _attributes: {
//                 Context: 'Author'
//             },
//             Exec: {
//                 Command: {
//                     _text: 'notepad.exe'
//                 }
//             }
//         }
//     },
// };

// import { CronToTaskSchedule } from "../src/CronToTaskSchedule";

// let data = CronToTaskSchedule.convert('00 07 * * 1-5', 'Open Notepad', 'ipconfig');

// console.log(data)