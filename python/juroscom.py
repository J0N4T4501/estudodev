
entradat = float(input("Digite um número: "))
entradap = float(input("Digite um número: "))
entradaj = float(input("Digite um número: "))

taxa = entradaj/100
montante = entradat * (1 + taxa) ** entradap
total = round(montante, 2)
par = total/entradap
perr = round(par, 2)

print(f"Sua compra ficará R$ {total} em {int(entradap)}x de R$ {perr} por mês")
