/// <reference types="node" />
import { Exec } from "./interfaces/Exec";
export declare class CronToTaskSchedule {
    static convert(taskName: string, cronExpression: string, taskRun: Exec, workingDirectory?: string): boolean;
    static deleteTask(taskName: string): Buffer;
}
