using System;

class Program
{
    static void Main(string[] args)
    {
        int primeiroValor = 2;
        int razao = 2;
        int posicao = 5;

        int valor = ValorPosicaoPG(primeiroValor, razao, posicao);

        Console.WriteLine($"O valor do termo na posição {posicao} é {valor}");
    }

    static int ValorPosicaoPG(int primeiroValor, int razao, int posicao)
    {
        int valor = primeiroValor * (int)Math.Pow(razao, posicao - 1);
        return valor;
    }
}
