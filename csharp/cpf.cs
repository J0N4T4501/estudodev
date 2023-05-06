using System;
using System.Text.RegularExpressions;

class FormatarCPF {
    static void Main() {
        Console.Write("Digite o CPF: ");
        string cpf = Console.ReadLine();

        // Remover qualquer caractere que não seja um dígito
        cpf = Regex.Replace(cpf, @"\D", "");

        // Adicionar a máscara ao CPF
        string cpfFormatado = cpf.Substring(0, 3) + "." + cpf.Substring(3, 3) + "." +
                              cpf.Substring(6, 3) + "-" + cpf.Substring(9, 2);

        // Imprimir o CPF formatado
        Console.WriteLine("CPF formatado: " + cpfFormatado);
    }
}
