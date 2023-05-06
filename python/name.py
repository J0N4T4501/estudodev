nome_completo = input("Insira seu nome completo: ")

# Separa o nome completo em uma lista de palavras
palavras = nome_completo.split()

# Pega o último nome da lista
ultimo_nome = palavras[-1]

# Monta a mensagem de boas-vindas
mensagem = f"Bem-vindo(a), {ultimo_nome}!"

# Exibe a mensagem de boas-vindas
print(mensagem)
