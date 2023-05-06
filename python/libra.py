mes = input("Insira o nome do mês em que você nasceu: ")
dia = int(input("Insira o dia do mês em que você nasceu (01-31): "))

ver = (mes.lower() == "setembro" and dia >= 23) or (mes.lower() == "outubro" and dia <= 22)

print(f"É do signo de Libra? {ver}")