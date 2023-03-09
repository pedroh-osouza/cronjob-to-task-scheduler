export enum CronFieldType {
    Minute = '/^([0-5][0-9])$/',
    Hour = '/^([0-9]|1[0-9]|2[0-3])$/',
    DayOfMonth = '/^([1-9]|[12][0-9]|3[01])$/',
    Month = '/^([1-9]|1[0-2])$/',
    DayOfWeek = '/^[0-7]$/'
}