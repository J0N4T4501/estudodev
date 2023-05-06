
const partida = '2023-01-01T12:0:00-03:00';


const tempoViagem = 2;


const fusoHorario = -5;


const dataPartida = new Date(partida);


// adiciona o tempo de viagem em milissegundos
dataPartida.setTime(dataPartida.getTime() + tempoViagem * 60 * 60 * 1000);

// adiciona o fuso horário de destino em minutos
dataPartida.setTime(dataPartida.getTime() + fusoHorario * 60 * 60 * 1000);



// formata a data/hora resultante no formato desejado
const chegada = `Você chegará em ${dataPartida.toISOString().replace('T', ' ').slice(0, -5)}`;

console.log(chegada); 
