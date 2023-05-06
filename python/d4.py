from datetime import datetime, timedelta

# hora de partida no formato ISO 8601
partida = '2023-05-06T12:00:00.000Z'

# tempo da viagem em horas
tempo_viagem = 2

# fuso horário de destino em horas em relação ao UTC
fuso_horario = -5

# cria um objeto datetime a partir da hora de partida
data_partida = datetime.fromisoformat(partida)

# adiciona o tempo de viagem
data_chegada = data_partida + timedelta(hours=tempo_viagem)

# adiciona o fuso horário de destino
data_chegada += timedelta(hours=fuso_horario)

# formata a data/hora resultante no formato desejado
chegada = f'Você chegará em {data_chegada.strftime("%Y-%m-%d %H:%M:%S")}'

print(chegada)
