# Cronjob-to-Task-Scheduler

`cronjob-to-task-scheduler` is a library that converts a cron schedule to a Windows task schedule.

## 📦 Install

```bash

npm install cronjob-to-task-scheduler

```

## 🔨 How to Usage

To use the library, follow the example:

```javascript

import { CronToTaskSchedule } from "cronjob-to-task-scheduler";

const taskName = 'MyTask';
const cronExpression = '00 07 * * *';
const taskTerminalCommand = 'notepad';

CronToTaskSchedule.convert(taskName, cronExpression, taskTerminalCommand)

```

## Limitations

- A schedule must have a maximum of 37 triggers.

- It does not support day (month) and day (week) together. For example: (0 22 1 * 1-5).

- The rule for modifiers with / has not been implemented.