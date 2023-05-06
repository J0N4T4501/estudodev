
nome = input()
obra = input()
cidade = input()
edit = input()
ano = input()

palavras = nome.split(" ")
ultimoNome = palavras[-1]
nameMa = ultimoNome.upper()

pn = nome[0].upper()

print(f"{nameMa}, {pn}. {obra}. {cidade}: {edit}, {ano}")
