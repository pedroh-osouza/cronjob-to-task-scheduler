import { CronData } from "../interfaces/CronData";
export declare class Cron {
    private readonly ranges;
    validate(cronExpression: string): void;
    private validateLength;
    private validateParts;
    private rangeValidate;
    private cronPartToArray;
    toData(cronExpression: string): CronData;
}
