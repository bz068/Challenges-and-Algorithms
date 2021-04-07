using System;

namespace palindrome
{
    class Program
    {
        static string ReverseSTR(string s)
        {
            char[] array = s.ToCharArray();
            Array.Reverse(array);
            return new string(array);
        }

        static bool checkPalindrome(string str)
        {
            string result = ReverseSTR(str);
            if(str == result)
            {
                return true;
            }
            {
                return false;
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine(checkPalindrome("madam"));
            Console.WriteLine(checkPalindrome("poop"));
            Console.WriteLine(checkPalindrome("cccczxc"));
            Console.WriteLine(checkPalindrome("deed"));

        }


    }
}
