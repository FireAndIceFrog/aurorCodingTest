"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolate = void 0;
// test('replace a name', () => {
//     expect(interpolate('Hello [name]', { 'name': 'Jim' })).toBe('Hello Jim');
// });
// test('don\'t replace a value when the brackets are escaped', () => {
//     expect(interpolate('Hello [name] [[author]]', { 'name': 'Jim' })).toBe('Hello Jim [author]');
// });
var NotEnoughVariables = /** @class */ (function (_super) {
    __extends(NotEnoughVariables, _super);
    function NotEnoughVariables() {
        return _super.call(this, "Keys dont match up. Check to see that they match in the same order, with the same names.") || this;
    }
    return NotEnoughVariables;
}(Error));
function handleRight(stringWithVar, key, value) {
    var _a;
    var secondSplitString = stringWithVar.split(new RegExp("(?<!\\])\\](?!\\])"));
    if (secondSplitString[0] !== key) {
        throw new NotEnoughVariables();
    }
    return (value !== null && value !== void 0 ? value : "") + ((_a = secondSplitString[1]) !== null && _a !== void 0 ? _a : "");
}
function interpolate(initialString, dictionary) {
    var finalstring = "";
    var intialStringArray = initialString.split(new RegExp("(?<!\\[)\\[(?!\\[)"));
    var keys = Object.keys(dictionary);
    if (keys.length + 1 !== intialStringArray.length) {
        throw new NotEnoughVariables();
    }
    finalstring += intialStringArray[0];
    for (var i = 0; i < keys.length; ++i) {
        finalstring += handleRight(intialStringArray[i + 1], keys[i], dictionary[keys[i]]);
    }
    return finalstring;
}
exports.interpolate = interpolate;
console.log(interpolate('Hello [name]', { 'name': 'Jim' }));
console.log(interpolate('Hello [name] [[author]]', { 'name': 'Jim' }));
console.log(interpolate('Hello [name] [lastname] [[author]]', { 'name': 'Jim', "lastname": 'Soap' }));
console.log(interpolate('Hello [name] [name] [[author]]', { "lastname": 'Soap', 'name': 'Jim' }));
console.log(interpolate('Hello [name] [name] [[author]]', { 'name': 'Jim' }));
console.log(interpolate('Hello [name] [lastname] [[author]]', {}));
//# sourceMappingURL=Interpolate.js.map