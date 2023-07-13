import { CronData } from "../interfaces/CronData";
export declare class Cron {
    private readonly ranges;
    private validate;
    private validateLength;
    private validateParts;
    private rangeValidate;
    private cronPartToArray;
    toData(cronExpression: string): CronData;
}
