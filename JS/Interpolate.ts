// test('replace a name', () => {
//     expect(interpolate('Hello [name]', { 'name': 'Jim' })).toBe('Hello Jim');
// });
// test('don\'t replace a value when the brackets are escaped', () => {
//     expect(interpolate('Hello [name] [[author]]', { 'name': 'Jim' })).toBe('Hello Jim [author]');
// });
class NotEnoughVariables extends Error {
    constructor() {
        super("Keys dont match up. Check to see that they match in the same order, with the same names.")
    }
}



function handleRight(stringWithVar:string, key: string, value:string){
    let secondSplitString = stringWithVar.split(new RegExp("(?<!\\])\\](?!\\])"));
    if(secondSplitString[0] !== key) {
        throw new NotEnoughVariables() 
    }
    return (value?? "") + (secondSplitString[1]?? "")
}
export function interpolate(initialString:string, dictionary: Object): string {
    let finalstring = ""
    let intialStringArray = initialString.split(new RegExp("(?<!\\[)\\[(?!\\[)"));
    let keys = Object.keys(dictionary)
    if(keys.length+1 !== intialStringArray.length){
        throw new NotEnoughVariables() 
    }
    finalstring += intialStringArray[0]
    for (let i = 0; i < keys.length; ++i){
        
        finalstring += handleRight(intialStringArray[i+1],keys[i],dictionary[keys[i]])
    }
    return finalstring
}


console.log(interpolate('Hello [name]', { 'name': 'Jim' }))
console.log(interpolate('Hello [name] [[author]]', { 'name': 'Jim' }))
console.log(interpolate('Hello [name] [lastname] [[author]]', { 'name': 'Jim', "lastname": 'Soap' }))

console.log(interpolate('Hello [name] [name] [[author]]', {  "lastname": 'Soap', 'name': 'Jim' }))
console.log(interpolate('Hello [name] [name] [[author]]', {  'name': 'Jim' }))
console.log(interpolate('Hello [name] [lastname] [[author]]', { }))