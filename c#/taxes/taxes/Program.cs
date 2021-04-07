using System;

namespace taxes
{
    class Program
    {

        static double[] taxesCheck(double x, double y)
        {
            double taxAmount = x * y / 100;
            taxAmount = taxAmount * 100;
            double[] taxArray = new double[1];
            taxArray[0] = taxAmount;
            return taxArray;

        }
        static void Main(string[] args)
        {
            double[] r = taxesCheck(50, 20);
            foreach(var item in r)
            {
                Console.WriteLine(item);
            }
        }
    }
}
