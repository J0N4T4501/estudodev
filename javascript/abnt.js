let nomee = "David Anthony Watt"
let obra = "Programming language design concepts"
let cidade = "Hoboken"
let edit ="John Wiley";
let ano =  "2004"

let palavras = nomee.split(" ");
let ultimoNome = palavras[palavras.length - 1];
let nameMa= ultimoNome.toUpperCase();

let pn= nomee.charAt(0);

console.log(`${nameMa}, ${pn}. ${obra}. ${cidade}: ${edit}, ${ano} `);

console.log("WATT, D. Programming language design concepts. Hoboken: John Wiley, 2004");

