using System;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var utcDateString = "2023-03-01T00:00:00Z";

            // cria um objeto DateTime com a data em UTC
            var utcDate = DateTime.Parse(utcDateString);

            // adiciona 3 horas à data em UTC
            utcDate = utcDate.AddHours(3);

            // formata a data e hora no fuso horário local sem os minutos e segundos
            var options = new System.Globalization.DateTimeFormatInfo();
            var localDateString = utcDate.ToString("dd/MM/yyyy", options);

            Console.WriteLine(localDateString);
        }
    }
}
