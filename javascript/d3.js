let dateString = '2023-01-01T18:00:00-01:00';

// cria um objeto Date com a data em UTC
let utcDate = new Date(dateString);

utcDate.setHours(utcDate.getHours() -3);

// formata a data e hora no fuso horário UTC
let formattedDateString = utcDate.toISOString().replace('T', ' ').slice(0, -5);

console.log(formattedDateString); // imprime '2023-01-01 17:30:00'
