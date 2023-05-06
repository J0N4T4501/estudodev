import random

numeros = []

# Gera 6 números aleatórios únicos
while len(numeros) < 6:
    num_aleatorio = random.randint(1, 60)
    if num_aleatorio not in numeros:
        numeros.append(num_aleatorio)

# Ordena os números em ordem crescente
numeros.sort()

# Imprime os números gerados

for numero in numeros:
    print(numero)
