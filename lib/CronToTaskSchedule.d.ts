/// <reference types="node" />
export declare class CronToTaskSchedule {
    static convert(taskName: string, cronExpression: string, taskRun: string): boolean;
    static deleteTask(taskName: string): Buffer;
}
