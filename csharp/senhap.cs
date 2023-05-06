using System;

class Program {
    static void Main() {
        string namex = "Jonatas da Silva prado";
        string cpf = "234.324 434-44";
        string numero = "92019-8039";

        // Recorta os nomes
        string[] partes = namex.Split();
        string nome = partes[0];
        string ultimoNome = partes[partes.Length - 1];

        char l1 = Char.ToUpper(nome[0]);
        char l2 = Char.ToUpper(ultimoNome[0]);

        Console.WriteLine(l1);
        Console.WriteLine(l2);

        cpf = new string(cpf.Where(c => char.IsDigit(c)).ToArray());

        // Adicionar a máscara ao CPF
        string cpfFormatado = cpf.Substring(0, 3) + "." + cpf.Substring(3, 3) + "." +
                              cpf.Substring(6, 3) + "-" + cpf.Substring(9);

        // Imprimir o CPF formatado
        Console.WriteLine("CPF formatado: {0}", cpfFormatado);

        string novoNumero = cpfFormatado.Substring(0, 3);
        Console.WriteLine(novoNumero);

        // Recorta o telefone
        numero = new string(numero.Where(c => char.IsDigit(c)).ToArray());
        string parte2 = numero.Substring(4, 6); // extrai a segunda parte do número (4 dígitos a partir do terceiro)
        string operadora = parte2.Substring(0, 2); // extrai os dois primeiros dígitos da segunda parte

        Console.WriteLine("Operadora: {0}", operadora);

        Console.WriteLine("Senha criada: {0}{1}{2}{3}", l1, l2, novoNumero, operadora);
    }
}
