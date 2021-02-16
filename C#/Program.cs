using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Text;
namespace interpolater
{   
    [Serializable]
    class NotEnoughVariables : Exception
    {
        public NotEnoughVariables()
            :base("Keys dont match up. Check to see that they match in the same order, with the same names.")
        { 
        }

        public NotEnoughVariables(string name)
            : base(String.Format("Invalid Student Name: {0}", name))
        {
        }
    
    }
    class Program
    {
        public Program (){

        }

        private string reduceStrings( string currString, Dictionary<string, string> dictionary,List<string> keys )
        {
            string[] intialStringArray = Regex.Split(currString, "\\](?!\\])", 
                                    RegexOptions.IgnoreCase,
                                    TimeSpan.FromMilliseconds(500));
            if(intialStringArray.Length == 1) 
            {
                return intialStringArray[0];
            } 

            else if (intialStringArray[0].StartsWith("[") )
            {
                return  intialStringArray[0] + intialStringArray[1] ?? "";
            }

            else if(!keys.Contains(intialStringArray[0]) )
            {
                throw new NotEnoughVariables() ;
            }    
            return  dictionary[intialStringArray[0]] + intialStringArray[1] ?? "";
        }

        public string Interpolate(string initialString,  Dictionary<string, string> dictionary){
            IEnumerable<string> intialStringArray = new List<string>(Regex.Split(initialString, "(?<!\\[)\\[", 
                                                RegexOptions.IgnoreCase,
                                                TimeSpan.FromMilliseconds(500)));
            var keys = new List<string> (dictionary.Keys);
            StringBuilder builder = new StringBuilder(); 
            foreach (var row in intialStringArray){
                builder.Append(reduceStrings( row, dictionary, keys));
            }
            return builder.ToString();
        }
        

    }
    // class Startup {
    //     static void Main(string[] args)
    //     {
    //         var program = new Program();
    //         Console.WriteLine(program.Interpolate("Hello [name]", new Dictionary<string, string>{{"name", "Jim"}}));
    //     }
    // }

}
