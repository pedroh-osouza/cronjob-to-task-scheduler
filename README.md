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

<!-- * * 1 * 1
1 * 1 * 1
* 1 1 * 1
1 1 1 * 1 -->

* * * 1 1
1 * * 1 1
* 1 * 1 1
1 1 * 1 1

<!-- * * 1 1 1
1 * 1 1 1
* 1 1 1 1
1 1 1 1 1 -->

# Limitações

Um agendamento deve ter no máximo 37 disparadores
