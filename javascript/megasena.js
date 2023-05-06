// Gera 6 números aleatórios únicos
function gerarNumeros() {
    var numeros = [];
  
    while (numeros.length < 6) {
      let numAleatorio = Math.floor(Math.random() * 60) + 1;
  
      if (!numeros.includes(numAleatorio)) {
        numeros.push(numAleatorio);
      }
    }
  
   
    numeros.sort(function(a, b) {
      return a - b;
    });
  
    return numeros;
  }
  
  
  let numerosSorteados = gerarNumeros();
  console.log("Os números sorteados para o jogo da Mega Sena são:");
  for (let i = 0; i < numerosSorteados.length; i++) {
    console.log(numerosSorteados[i]);
  }
  