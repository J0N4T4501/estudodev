let  a = 'Programar é muito difícil!';

let novaString = a.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

let novaStringx = novaString.replace(/[aeiou]/g, "i");
console.log(novaStringx);