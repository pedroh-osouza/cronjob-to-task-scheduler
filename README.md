# cronjob-to-task-scheduler
Converte uma expressão CRON para um comando de agendamento de tarefa no windows

ROBO START TODO DIA EM UMA ESPECIFICA

ROBO STARTA TODO DIA EM UMA OU MAIS HORAS

ROBO STARTA EM DIAS ESPECIFICOS COM UMA HORA ESPECIFICA

ROBO STARTA EM DIAS ESPECIFICOS COM UMA OU MAIS HORAS

Cada valor separado por espaço em um cron pode ter um dos seguintes valores:

Um número de 0 a 59 (para os minutos e segundos) ou de 0 a 23 (para as horas).
Um asterisco (*) para indicar que todos os valores são aceitos.
Um intervalo, no formato valorInicial-valorFinal. Por exemplo, 2-4 indica os valores 2, 3 e 4.
Uma lista de valores, separados por vírgula. Por exemplo, 1,3,4,7 indica os valores 1, 3, 4 e 7.
Um intervalo com um incremento, no formato valorInicial-valorFinal/incremento. Por exemplo, 0-23/2 indica os valores 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 e 22.
Uma lista de valores com incremento, no formato valorInicial,valorInicial+incremento,valorInicial+(2*incremento),.... Por exemplo, 3,6,9,12 indica os valores 3, 6, 9 e 12.


# Possibilidades

* 1 * * *
1 1 * * *
* * 1 * *
1 * 1 * *
* 1 1 * *
1 1 1 * *
* * * 1 *
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
