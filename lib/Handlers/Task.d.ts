import { Triggers } from "../interfaces/ScheduleXmlObject";
export declare class Task {
    taskName: string;
    triggers: Triggers;
    command: string;
    constructor(taskName: string, triggers: Triggers, command: string);
    schedule(): boolean;
    private build;
    private toSchedule;
    private existsTask;
}
