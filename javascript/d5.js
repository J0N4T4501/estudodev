
let data = '2023-01-01T12:0:00-03:00';

const fusoHorario = -5;
const fusoHorariol = 2;

const dataPartida = new Date(data);



dataPartida.setTime(dataPartida.getTime() + tempoViagem * 60 * 60 * 1000);
dataPartida.setTime(dataPartida.getTime() + fusoHorariol * 60 * 60 * 1000);

console.log(fusoHorariol);  



const chegada = `Você chegará em ${dataPartida.toISOString().replace('T', ' ').slice(0, -5)}`;

//console.log(chegada); 
