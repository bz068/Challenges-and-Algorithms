using System;

namespace anagram
{
    class Program
    {
        static void anagramCheck(string str1, string str2)
        {
            if (str1.Length == str2.Length)
            {
                char[] ch1 = (str1.ToLower()).ToCharArray();
                char[] ch2 = (str2.ToLower()).ToCharArray();


                Array.Sort(ch1);
                Array.Sort(ch2);

                String word1 = new String(ch1);
                String word2 = new String(ch2);

                if(word1 == word2)
                {
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine($"{str1}, {str2} are both Anagrams");
                    Console.ResetColor();
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"{str1}, {str2} are Not Anagrams");
                    Console.ResetColor();
                }
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine($"{str1}, {str2} are Not Anagrams");
                Console.ResetColor();
            }
        }
        static void Main(string[] args)
        {
            while (1 < 2)
            {
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine("Welcome to Anagram Game!");
                Console.ResetColor();

                Console.WriteLine("Please Enter your first Word");
                string w = Console.ReadLine();
                Console.WriteLine("Please Enter your first Word");
                string w1 = Console.ReadLine();

                anagramCheck(w, w1);


                /* anagramCheck("listen","silent");
                 anagramCheck("race", "care");
                 anagramCheck("part", "trap");
                 anagramCheck("dsf", "ffffff");
                 anagramCheck("fdf", "zxf");
                 anagramCheck("knee", "keen");
     */
            }
        }
    }
}
