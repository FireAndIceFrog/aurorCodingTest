This is the assesment folder for Auror, completed on the 16/2/2021

## Assumptions:
1. The interpolator should throw an error if there is a variable being called, which does not exist in the dictionary/object
2. The interpolator should not throw and error if there are dictionary items which are not being used (not an exact key-key match)
3. The interpolator can reuse the same variables in the dictionary, and the dictionary is order-safe - meaning it doesnt matter what order the variables are entered in
4. To escape the interpolation command, use "[[" and "]]" - not "\[" and "\]"

# How it works:
## Javascript
1. Navigate to the JS folder
2. Run NPM Install
3. Run NPX jest test

This will run the test cases found in the __tests__ folder - they assert the function matches the right specification. 
Note: The typescript is the actual file to read, it is compiled to JS.

## CSharp
1. Navigate to the C# folder
3. Run Dotnet Build
2. Run Dotnet Test

This will build the program and run the test cases against the folder. I chose not to write as many test cases because you can see that they work in the JS suite.
