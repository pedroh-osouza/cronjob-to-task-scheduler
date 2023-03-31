# Cronjob-to-Task-Scheduler

`cronjob-to-task-scheduler` is a library that converts a cron schedule to a Windows task schedule.

## 📦 Install

```bash

npm install cronjob-to-task-scheduler

```

## 🔨 How to Usage

To use the library, follow the example:

```javascript

const { CronToTaskSchedule } = require("cronjob-to-task-scheduler");

const taskName = 'openNotepad';
const cronExpression = '00 12 * * *';
const action = {
    command: 'notepad'
    // you can pass execution arguments in arguments property 
} 

CronToTaskSchedule.convert(taskName, cronExpression, action);

```

If you want to create a folder for your schedules just add a \

```javascript

const { CronToTaskSchedule } = require("cronjob-to-task-scheduler");

const taskName = 'MyTasks\\openNotepad';
const cronExpression = '00 12 * * *';
const action = {
    command: 'notepad'
    // you can pass execution arguments in arguments property 
} 

CronToTaskSchedule.convert(taskName, cronExpression, action);

```

Result

![Result](https://github.com/pedroh-osouza/cronjob-to-task-scheduler/blob/main/examples/myTasksOpenNotepad.PNG)

## Limitations

- A schedule must have a maximum of 37 triggers.

- It does not support day (month) and day (week) together. For example: (0 22 1 * 1-5).

- The rule for modifiers with / has not been implemented.
