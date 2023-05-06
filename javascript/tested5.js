const dataHoraLocal = new Date('2023-01-01T19:00:00-03:00');
const fusoHorarioDestino = 'Europe/Athens';


const opcoes = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: fusoHorarioDestino,
  hour12: false
};

const dataHoraDestino = new Intl.DateTimeFormat('en-US', opcoes).format(dataHoraLocal);
const resultado = new Date(dataHoraDestino).getFullYear() > dataHoraLocal.getFullYear();
console.log(`Já é Ano Novo em Atenas, Grécia? ${resultado}`); // deverá exibir "Já é Ano Novo em Atenas, Grécia? true"
