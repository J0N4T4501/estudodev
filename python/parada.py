
import math

# Solicitando as entradas do usuário
capacidadeTanque = float(input("Informe a capacidade do tanque (em litros): "))
consumoVeiculo = float(input("Informe o consumo do veículo (em km/l): "))
distanciaViagem = float(input("Informe a distância da viagem (em km): "))

# Calculando a quantidade de combustível necessária
qtdCombustivelNecessaria = distanciaViagem / consumoVeiculo

# Calculando o número de vezes que o tanque precisará ser abastecido
vezesTanqueAbastecido = qtdCombustivelNecessaria / capacidadeTanque

# Verificando se o resultado é um número inteiro
paradasNecessarias = math.ceil(vezesTanqueAbastecido)

# Exibindo o resultado
print(f"Serão necessárias {paradasNecessarias} paradas para abastecimento.")
