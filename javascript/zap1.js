
let numero = "+55 (11) 99988-7766";
let celular = numero.replace(/\D/g, '');
console.log("https://api.whatsapp.com/send?phone="+celular)