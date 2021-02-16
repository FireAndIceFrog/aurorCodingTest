"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotEnoughVariables extends Error {
    constructor() {
        super("Keys dont match up. Check to see that they match in the same order, with the same names.");
    }
}
function reduceStrings(finalString, currString, dictionary, keys) {
    var _a, _b;
    let intialStringArray = currString.split(new RegExp("\\](?!\\])"));
    if (typeof (intialStringArray[1]) == undefined || typeof (intialStringArray[1]) == null) {
        return finalString + intialStringArray[0];
    }
    else if (intialStringArray[0].startsWith("[")) {
        return (_a = finalString + intialStringArray[0] + intialStringArray[1]) !== null && _a !== void 0 ? _a : "";
    }
    else if (keys.indexOf(intialStringArray[0]) < 0) {
        throw new NotEnoughVariables();
    }
    return (_b = finalString + dictionary[intialStringArray[0]] + intialStringArray[1]) !== null && _b !== void 0 ? _b : "";
}
function interpolate(initialString, dictionary) {
    let intialStringArray = initialString.split(new RegExp("(?<!\\[)\\["));
    let keys = Object.keys(dictionary);
    let finalstring = intialStringArray.reduce((final, curr) => {
        return reduceStrings(final, curr, dictionary, keys);
    });
    return finalstring;
}
exports.default = interpolate;
//# sourceMappingURL=Interpolate.js.map