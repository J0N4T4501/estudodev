let dateString = '2023-01-01T17:30:00Z';

// cria um objeto Date com a data em UTC
let utcDate = new Date(dateString);

// formata a data e hora no fuso horário UTC
let formattedDateString = utcDate.toISOString().replace('T', ' ').slice(0, -5);

console.log(formattedDateString); // imprime '2023-01-01 17:30:00'
