using System;

class Program {
    static void Main(string[] args) {
        string numero = "+55 (11) 99988-7766";
        string celular = new string(numero.Where(char.IsDigit).ToArray());
        Console.WriteLine("https://api.whatsapp.com/send?phone=" + celular);
    }
}
