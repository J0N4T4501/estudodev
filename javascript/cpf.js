let cpf = prompt("Digite o CPF: ");

// Remover qualquer caractere que não seja um dígito
cpf = cpf.replace(/\D/g, "");

// Adicionar a máscara ao CPF
let cpfFormatado = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." +
                   cpf.substring(6, 9) + "-" + cpf.substring(9);

// Imprimir o CPF formatado
console.log("CPF formatado:", cpfFormatado);
