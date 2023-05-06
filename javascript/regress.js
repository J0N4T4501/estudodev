function valorPosicaoPG(primeiroValor, razao, posicao) {
    let valor = primeiroValor * Math.pow(razao, posicao - 1);
    return valor;
  }
  
  // Exemplo de uso da função
  let primeiroValor = 2;
  let razao = 2;
  let posicao = 5;
  
  let valor = valorPosicaoPG(primeiroValor, razao, posicao);
  
  console.log(`O valor do termo na posição ${posicao} é ${valor}`);
  