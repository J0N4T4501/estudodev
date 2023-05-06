using System;

public class Program
{
    public static void Main()
    {
        string dateString = "2023-01-01T17:30:00Z";
        
        // cria um objeto DateTime com a data em UTC
        DateTime utcDate = DateTime.Parse(dateString).ToUniversalTime();

        // formata a data e hora no fuso horário UTC
        string formattedDateString = utcDate.ToString("yyyy-MM-dd HH:mm:ss");
        
        Console.WriteLine("Horário local: " + formattedDateString); // imprime '2023-01-01 17:30:00'
    }
}
