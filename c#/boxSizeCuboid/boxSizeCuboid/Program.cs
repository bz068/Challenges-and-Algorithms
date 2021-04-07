using System;

namespace boxSizeCuboid
{
    class Program
    {
        static double checkBoxSize(double x, double y, double z)
        {
            double r = (x * y * z) / 1000000; //cubic m
            double l = r * 1000;
            return l;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(checkBoxSize(100, 200, 250));
        }
    }
}
