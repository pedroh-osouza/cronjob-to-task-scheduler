# cronjob-to-task-scheduler
Converte uma expressão CRON para um comando de agendamento de tarefa no windows

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
1 * * 1 * 
* 1 * 1 *
1 1 * 1 *
* * 1 1 *
1 * 1 1 *
* 1 1 1 *
1 1 1 1 *
* * * * 1
1 * * * 1
* 1 * * 1
1 1 * * 1
* * 1 * 1
1 * 1 * 1
* 1 1 * 1
1 1 1 * 1
* * * 1 1
1 * * 1 1
* 1 * 1 1
1 1 * 1 1
* * 1 1 1
1 * 1 1 1
* 1 1 1 1
1 1 1 1 1

# Limitações

Um agendamento deve ter no máximo 37 disparadores

hourDayOfMonth = 'Não tem como fazer as duas limitações pq a tarefa precisa rodar somente naquele dia mas somente por 1 hora'
