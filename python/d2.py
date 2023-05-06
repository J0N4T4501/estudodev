from datetime import datetime

dateString = '2023-01-01T17:30:00Z'

# cria um objeto datetime com a data em UTC
utcDate = datetime.fromisoformat(dateString)

# formata a data e hora no fuso horário UTC
formattedDateString = utcDate.strftime('%Y-%m-%d %H:%M:%S')

print('Horário local:', formattedDateString)
