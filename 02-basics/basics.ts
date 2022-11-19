let greetings: string = "Hello World";

// greetings = true; // Error: Type 'true' is not assignable to type 'string'.
let myNum = 6;

// myNum.toUpper(); // Error: Property 'toUpper' does not exist on type 'number'.
greetings.toUpperCase(); // OK
console.log(greetings);

// Number
let userId = 1235345.343;
userId.toFixed(2); // OK
// userId = "rokas"; // Error: Type '"rokas"' is not assignable to type 'number'.
const isLogged: boolean = true;
// isLogged.valueOf(); // OK

// String


export {};
