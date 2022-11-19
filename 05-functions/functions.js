"use strict";
exports.__esModule = true;
function addTwo(num) {
    // num.toUpperCase(); // Error
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
getUpper("Rokas"); // OK
addTwo(2); // 4
signUpUser("Rokas", "rokas.rudzenskas@gmail.com", false); // OK
loginUser("Rokas", "hello@hello.com"); // OK
//# sourceMappingURL=functions.js.map