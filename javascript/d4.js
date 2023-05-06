const partida = new Date('2023-04-15T12:00:00Z'); // hora de partida em UTC
const tempoDeViagem = 10; // tempo de viagem em horas
const fusoHorarioDestino = -3; // fuso horário do país destino (exemplo: Brasil)

// Adiciona o tempo de viagem à hora de partida em UTC
const chegadaUTC = new Date(partida.getTime() + tempoDeViagem * 60 * 60 * 1000);

// Converte a hora de chegada para o fuso horário do país destino
const chegadaDestino = new Date(chegadaUTC.getTime() + fusoHorarioDestino * 60 * 60 * 1000);

// Formata a data/hora de chegada no formato desejado (exemplo: "2023-04-15 19:00")
const formatoDataHora = new Intl.DateTimeFormat('en-US', { 
  timeZone: 'UTC', 
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});
const dataHoraChegada = formatoDataHora.format(chegadaDestino).replace(/(-d{2})-)-(d{2})/, '$2-$3-$1').replace('T', ' ');

console.log(`A hora prevista de chegada no país destino é: ${dataHoraChegada}`);
