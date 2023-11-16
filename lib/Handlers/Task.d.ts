import { Triggers } from "../interfaces/ScheduleXmlObject";
import { Exec } from "../interfaces/Exec";
export declare class Task {
    taskName: string;
    triggers: Triggers;
    command: Exec;
    workingDirectory?: string | undefined;
    constructor(taskName: string, triggers: Triggers, command: Exec, workingDirectory?: string | undefined);
    schedule(): boolean;
    private build;
    private toSchedule;
    private existsTask;
}
