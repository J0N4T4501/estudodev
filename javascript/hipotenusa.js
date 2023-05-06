const readLine = require('prompt-sync')();

let  catetoOposto = Number(readLine());
let  catetoAdjacent = Number(readLine());

let hipotenusa = Math.sqrt(catetoOposto**2+ catetoAdjacent**2);

console.log("A hipotenusa é "+ hipotenusa+".0");