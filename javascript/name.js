let nomeCompleto = prompt("Insira seu nome completo:");
let palavras = nomeCompleto.split(" ");
let ultimoNome = palavras[palavras.length - 1];
let mensagem = `Bem-vindo(a), ${ultimoNome}!`;
alert(mensagem);
