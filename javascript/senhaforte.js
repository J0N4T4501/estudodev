

let senha = "adm";

let ver = (senha.includes("@") || senha.includes("#")|| senha.includes("$") || senha.includes("%") || senha.includes("^") || senha.includes("&")
|| senha.includes("*") || senha.includes("_")) && (senha.length>=6);

console.log(ver);