


using System;
using System.Text;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite um texto com acentos: ");
        string texto_com_acentos = Console.ReadLine();

        // Remover acentos
        string texto_sem_acentos = Encoding.ASCII.GetString(Encoding.GetEncoding("Cyrillic").GetBytes(texto_com_acentos));

        // Substituir letras
        string texto_sub = texto_sem_acentos.Replace("a", "i").Replace("e", "i").Replace("o", "i").Replace("u", "i");

        Console.WriteLine(texto_sub);
    }
}
