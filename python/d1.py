import datetime

utcDateString = '2023-03-01T00:00:00Z'

# cria um objeto datetime com a data em UTC
utcDate = datetime.datetime.fromisoformat(utcDateString)

# adiciona 3 horas à data em UTC
utcDate += datetime.timedelta(hours=3)

# formata a data no fuso horário local sem os minutos e segundos
localDateString = utcDate.strftime('%d/%m/%Y')

print(localDateString)
