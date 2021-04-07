using System;

namespace calculatorCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 2;
            while (i < 5)
            {
                try
                {
                    Console.WriteLine("Please Enter Number 1");
                    double x = Convert.ToInt64(Console.ReadLine());

                    Console.WriteLine("Please Enter Operator");
                    char z = Convert.ToChar(Console.ReadLine());

                    Console.WriteLine("Please Enter Number 2");
                    double y = Convert.ToInt64(Console.ReadLine());

                    if (z == '+')
                    {
                        double r = x + y;
                        Console.WriteLine($"Answer {r}");
                    }
                    else if (z == '-')
                    {
                        double r = x-y;
                        Console.WriteLine($"Answer {r}");
                    }
                    else if (z == '*')
                    {
                        double r = x *y;
                        Console.WriteLine($"Answer {r}");
                    }
                    else if (z == '/')
                    {
                        double r = x /y;
                        Console.WriteLine($"Answer {r}");
                    }
                    else if (z == '%')
                    {
                        double r = x %y;
                        Console.WriteLine($"Answer {r}");
                    }
                    else
                    {
                        Console.WriteLine("Error, Please Enter the correct Operator");
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }
            }
            
    }
}
