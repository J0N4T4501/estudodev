let namex = "Jonatas da Silva prado"
let cpf= "234.324 434-44"
let numero ="92019-8039"


//recorta os nomes
let partes = namex.split(" ");
let nome = partes[0];
let ultimoNome = partes[partes.length - 1];



let l1 = nome.charAt(0).toUpperCase();
let l2 = ultimoNome.charAt(0).toUpperCase();


console.log(l1);
console.log(l2);




cpf = cpf.replace(/\D/g, "");

// Adicionar a máscara ao CPF
let cpfFormatado = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." +
                   cpf.substring(6, 9) + "-" + cpf.substring(9);

// Imprimir o CPF formatado
console.log("CPF formatado:", cpfFormatado);

let novoNumero = cpfFormatado.substring(0, 3);
console.log(novoNumero)



//recorta o telefone

numero = numero.replace(/\D/g, ""); // remove todos os não dígitos (exceto o primeiro "1" do DDD)
let parte2 = numero.substr(5, 6); // extrai a segunda parte do número (4 dígitos a partir do terceiro)
let operadora = parte2.substr(0, 2); // extrai os dois primeiros dígitos da segunda parte


console.log("Operadora:", operadora);

console.log("Senha criada: "+l1+l2+novoNumero+operadora);






