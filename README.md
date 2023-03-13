# Cronjob-to-Task-Scheduler

`cronjob-to-task-scheduler` is a library that converts a cron schedule to a Windows task schedule.

## 📦 Install

```bash

npm install cronjob-to-task-scheduler

```

## 🔨 How to Usage

To use the library, follow these steps:

1. 

## Limitations

- A schedule must have a maximum of 37 triggers.

- It does not support day (month) and day (week) together. For example: (0 22 1 * 1-5).

- The rule for modifiers with / has not been implemented.
