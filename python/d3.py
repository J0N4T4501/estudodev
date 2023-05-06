from datetime import datetime, timedelta

import pytz

date_string = '2023-01-01T18:00:00-01:00'

# cria um objeto datetime com a data em UTC
utc_date = datetime.fromisoformat(date_string).astimezone(pytz.utc)

# subtrai 3 horas da data em UTC
new_utc_date = utc_date - timedelta(hours=3)

# formata a data e hora no fuso horário UTC
formatted_date_string = new_utc_date.strftime('%Y-%m-%d %H:%M:%S')

print(f"Avise o hotel em {formatted_date_string} de Brasil/SãoPaulo")
