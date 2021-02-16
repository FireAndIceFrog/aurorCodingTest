class NotEnoughVariables extends Error {
    constructor() {
        super("Keys dont match up. Check to see that they match in the same order, with the same names.")
    }
}

function reduceStrings(finalString: string, currString:string, dictionary: Object,keys: string[] )
{
    let intialStringArray = currString.split(new RegExp("\\](?!\\])"));
    if(typeof(intialStringArray[1]) == undefined || typeof(intialStringArray[1]) == null) 
    {
        return finalString + intialStringArray[0];
    } 

    else if (intialStringArray[0].startsWith("[") )
    {
        return finalString + intialStringArray[0] + intialStringArray[1] ?? "";
    }

    else if(keys.indexOf(intialStringArray[0]) < 0)
    {
        throw new NotEnoughVariables() ;
    }    
    return finalString + dictionary[intialStringArray[0]] + intialStringArray[1] ?? "";
}

export default function interpolate(initialString:string, dictionary: Object): string {
    let intialStringArray = initialString.split(new RegExp("(?<!\\[)\\["));
    let keys = Object.keys(dictionary);
    let finalstring = intialStringArray.reduce(
        (final,curr)=>
        {
            return reduceStrings(final, curr, dictionary, keys);
        }
    )
    return finalstring;
}
