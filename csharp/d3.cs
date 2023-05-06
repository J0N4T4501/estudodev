using System;

class Program
{
    static void Main(string[] args)
    {
        string dateString = "2023-01-01T18:00:00-01:00";

        // cria um objeto DateTimeOffset com a data em UTC
        DateTimeOffset utcDate = DateTimeOffset.Parse(dateString).ToUniversalTime();

        utcDate = utcDate.AddHours(-3);

        // formata a data e hora no fuso horário UTC
        string formattedDateString = utcDate.ToString("yyyy-MM-dd HH:mm:ss");

        Console.WriteLine($"Avise o hotel em {formattedDateString} de Brasil/SãoPaulo");
    }
}
