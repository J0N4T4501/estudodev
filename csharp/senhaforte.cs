using System;

class Program {
    static void Main() {
        string senha = "adm";
        bool ver = (senha.Contains("@") || senha.Contains("#") || senha.Contains("$") || senha.Contains("%") || senha.Contains("^") || senha.Contains("&") || senha.Contains("*") || senha.Contains("_")) && senha.Length >= 6;
        Console.WriteLine(ver);
    }
}