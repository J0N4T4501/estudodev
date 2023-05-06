// Definindo as variáveis de entrada
const capacidadeTanque = 50; // em litros
const consumoVeiculo = 10; // em km/l
const distanciaViagem = 400; // em km

// Calculando a quantidade de combustível necessária
const qtdCombustivelNecessaria = distanciaViagem / consumoVeiculo;

// Calculando o número de vezes que o tanque precisará ser abastecido
const vezesTanqueAbastecido = qtdCombustivelNecessaria / capacidadeTanque;

// Verificando se o resultado é um número inteiro
const paradasNecessarias = Math.ceil(vezesTanqueAbastecido);

// Exibindo o resultado
console.log(`Serão necessárias ${paradasNecessarias} paradas para abastecimento.`);
