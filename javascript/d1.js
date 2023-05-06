let utcDateString = '2023-03-01T00:00:00Z';

// cria um objeto Date com a data em UTC
let  utcDate = new Date(utcDateString);

// adiciona 3 horas à data em UTC
utcDate.setHours(utcDate.getHours() + 3);

// formata a data e hora no fuso horário local sem os minutos e segundos
const options = { day: '2-digit', month: '2-digit', year: 'numeric', };
const localDateString = utcDate.toLocaleDateString('pt-BR', options);

console.log(localDateString);
