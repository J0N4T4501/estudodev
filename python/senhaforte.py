senha = "adm"
ver = ("@" in senha or "#" in senha or "$" in senha or "%" in senha or "^" in senha or "&" in senha or "*" in senha or "_" in senha) and len(senha) >= 6
print(ver)
