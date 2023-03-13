# cronjob-to-task-scheduler

Converte um agendamento cron para um agendamento de tarefas windows

# Como Usar

# Limitações

  - Um agendamento deve ter no máximo 37 disparadores.

  - Não suporta day (month) e day (week) juntos. Exemplo: (0 22 1 * 1-5).

  - Não implementada a regra dos modificadores com /.
