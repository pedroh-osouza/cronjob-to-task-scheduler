# cronjob-to-task-scheduler

Converte um agendamento cron para um agendamento windows

# Possibilidades

* * * * * // FEITO
1 * * * * // FEITO
* 1 * * * // FEITO
1 1 * * * // FEITO
* * 1 * * // FEITO
1 * 1 * * // FEITO
* 1 1 * * // FEITO
1 1 1 * * // FEITO
* * * 1 * // FEITO
1 * * 1 * // FEITO
* 1 * 1 * // FEITO
1 1 * 1 * // FEITO
* * 1 1 * // FEITO
1 * 1 1 * // FEITO
* 1 1 1 * // FEITO
1 1 1 1 * // FEITO
* * * * 1 // FEITO
1 * * * 1 // FEITO
* 1 * * 1 // FEITO
1 1 * * 1 // FEITO



* * * 1 1 // FEITO
1 * * 1 1 // FEITO
* 1 * 1 1 // FEITO
1 1 * 1 1 // FEITO

* * 1 * 1 // IMPOSSIVEL
1 * 1 * 1 // IMPOSSIVEL
* 1 1 * 1 // IMPOSSIVEL
1 1 1 * 1 // IMPOSSIVEL
* * 1 1 1 // IMPOSSIVEL
1 * 1 1 1 // IMPOSSIVEL
* 1 1 1 1 // IMPOSSIVEL
1 1 1 1 1 // IMPOSSIVEL

# Limitações

Um agendamento deve ter no máximo 37 disparadores
Não suporta dayOfMonth e DayOfWeek juntos
Não implementado a regra da /
