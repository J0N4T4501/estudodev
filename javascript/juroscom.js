


function calcularJurosCompostos(valorTotal, numParcelas, taxaJuros) {
    
    const taxa = taxaJuros / 100; // convertendo a taxa de porcentagem para decimal
    const montante = valorTotal * (1 + taxa) ** numParcelas;

    const par = montante.toFixed(2)/numParcelas;
    console.log(par.toFixed(2));
  
    return montante.toFixed(2); // arredondando o resultado para 2 casas decimais
    
  }
  
  // Exemplo de uso:
  const valor = 1200;
  const parcelas = 12;
  const taxa =5;
  const resultado = calcularJurosCompostos(valor, parcelas, taxa);
  console.log(`Valor final da compra: R$ ${resultado}`);
