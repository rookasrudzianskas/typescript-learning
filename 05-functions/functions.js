"use strict";
exports.__esModule = true;
function addTwo(num) {
    // num.toUpperCase(); // Error
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
var myValue = addTwo(2);
getUpper("Rokas"); // OK
addTwo(2); // 4
signUpUser("Rokas", "rokas.rudzenskas@gmail.com", false); // OK
loginUser("Rokas", "hello@hello.com"); // OK
// Path: 05-functions/functions.ts
// function getValue(myVal: number): number {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["Batman", "Superman", "Spiderman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errorMessage) {
    console.log("Error", errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
//# sourceMappingURL=functions.js.map