import { cronData } from "../types/cronData";
import { Daily } from "./SchedulesTypes/Daily";
import { DailySpecificDay } from "./SchedulesTypes/DailySpecificDay";

export class SelectScheduleType
{
    static select(data: cronData)
    {
        const {minutes, hours, dayOfMonth, month, dayOfWeek} = data;

        // Uma tarefa que executa diariamente em determinada(s) hora(s) e minuto(s), independente do dia do mês, mês e dia da semana
        const daily: Boolean = (minutes != '*' && hours != '*' && dayOfMonth == '*' && month == '*' && dayOfWeek == '*')

        /*Uma tarefa que executa em dias específicos da semana em determinada(s) hora(s) e minutos(s), independente do dia do mês, mês
        e dia da semana
        */
        const dailySpecificDay: Boolean = (minutes != '*' && hours != '*' && dayOfMonth == '*' && month == '*' && dayOfWeek != '*')

        /*Uma tarefa que executa em determinado(s) minuto(s), independente da hora, dia do mes, mes e dia da semana*/
        const specificMinutes: Boolean = (minutes != '*' && hours == '*' && dayOfMonth == '*' && month == '*' && dayOfWeek == '*')

        /*Uma tarefa que executa em determinada(s) hora(s), independente do minuto, dia do mes, mes e dia da semana*/
        const specificHour: Boolean = (minutes == '*' && hours != '*' && dayOfMonth == '*' && month == '*' && dayOfWeek == '*')

        if(daily) return Daily.handle(minutes, hours);
        if(dailySpecificDay) return DailySpecificDay.handle(minutes, hours, dayOfWeek);
        if(specificMinutes) return;
        if(specificHour) return;
    }
}