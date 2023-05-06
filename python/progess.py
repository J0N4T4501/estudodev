def valor_posicao_pg(primeiro_valor, razao, posicao):
    valor = primeiro_valor * (razao ** (posicao - 1))
    return valor

# Exemplo de uso da função
primeiro_valor = 2
razao = 2
posicao = 5

valor = valor_posicao_pg(primeiro_valor, razao, posicao)

print(f"O valor do termo na posição {posicao} é {valor}")
