using System;

class MainClass {
  public static void Main (string[] args) {
    string nome = Console.ReadLine();
    string obra = Console.ReadLine();
    string cidade = Console.ReadLine();
    string edit = Console.ReadLine();
    string ano = Console.ReadLine();

    string[] palavras = nome.Split(' ');
    string ultimoNome = palavras[palavras.Length - 1];
    string nameMa = ultimoNome.ToUpper();

    char pn = nome.ToUpper()[0];

    Console.WriteLine($"{nameMa}, {pn}. {obra}. {cidade}: {edit}, {ano}.");
  }
}
