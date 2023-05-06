using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        // Gera 6 números aleatórios únicos
        List<int> numeros = new List<int>();
        Random rand = new Random();

        while (numeros.Count < 6) {
            int numAleatorio = rand.Next(1, 61);

            if (!numeros.Contains(numAleatorio)) {
                numeros.Add(numAleatorio);
            }
        }

        // Ordena os números em ordem crescente
        numeros.Sort();

        // Imprime os números gerados
        Console.WriteLine("Os números sorteados para o jogo da Mega Sena são:");
        foreach (int numero in numeros) {
            Console.WriteLine(numero);
        }
    }
}
