"use strict";
exports.__esModule = true;
var greetings = "Hello World";
// greetings = true; // Error: Type 'true' is not assignable to type 'string'.
var myNum = 6;
// myNum.toUpper(); // Error: Property 'toUpper' does not exist on type 'number'.
greetings.toUpperCase(); // OK
console.log(greetings);
// Number
var userId = 1235345.343;
userId.toFixed(2); // OK
// userId = "rokas"; // Error: Type '"rokas"' is not assignable to type 'number'.
var isLogged = true;
//# sourceMappingURL=basics.js.map