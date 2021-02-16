const interpolate =  require( '../Interpolate').default;

test('replace a name', () => {
    expect(interpolate('Hello [name]', { 'name': 'Jim' })).toBe('Hello Jim');
});

test('don\'t replace a value when the brackets are escaped', () => {
    expect(interpolate('Hello [name] [[author]]', { 'name': 'Jim' })).toBe('Hello Jim [author]');
});

test('Check for multiple variables', () => {
    expect(interpolate('Hello [name] [lastname] [[author]]', { 'name': 'Jim', "lastname": 'Soap' })).toBe('Hello Jim Soap [author]');
});

test('Check for multiple variables, with the wrong order', () => {
    expect(interpolate('Hello [name] [name] [[author]]', {  "lastname": 'Soap', 'name': 'Jim' })).toBe('Hello Jim Jim [author]');
});

test('Check for multiple calls to the same variable', () => {
    expect(interpolate('Hello [name] [name] [[author]]', {  'name': 'Jim' })).toBe('Hello Jim Jim [author]');
});

test('Check for calls to non-existant variables', () => {
        let message = ""
        try 
        {
            interpolate('Hello [name] [[author]]', { });
        }
        catch (e){
            message = e.message;
            
        }
        expect(message).toBe("Keys dont match up. Check to see that they match in the same order, with the same names.");
});

test('Check for no calls to variables', () => {
    expect(interpolate('Hello [[author]]', { })).toBe("Hello [author]");
});
