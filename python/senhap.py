namex = "Jonatas da Silva prado"
cpf = "234.324 434-44"
numero = "92019-8039"

# Recorta os nomes
partes = namex.split()
nome = partes[0]
ultimo_nome = partes[-1]

l1 = nome[0].upper()
l2 = ultimo_nome[0].upper()

print(l1)
print(l2)

cpf = ''.join(filter(str.isdigit, cpf))

# Adicionar a máscara ao CPF
cpf_formatado = cpf[:3] + '.' + cpf[3:6] + '.' + cpf[6:9] + '-' + cpf[9:]

# Imprimir o CPF formatado
print("CPF formatado:", cpf_formatado)

novo_numero = cpf_formatado[:3]
print(novo_numero)

# Recorta o telefone
numero = ''.join(filter(str.isdigit, numero))
parte2 = numero[4:10]  # extrai a segunda parte do número (4 dígitos a partir do terceiro)
operadora = parte2[:2]  # extrai os dois primeiros dígitos da segunda parte

print("Operadora:", operadora)

print("Senha criada:", l1+l2+novo_numero+operadora)
