numero = "+55 (11) 99988-7766"
celular = ''.join(filter(str.isdigit, numero))
print("https://api.whatsapp.com/send?phone=" + celular)
