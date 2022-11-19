let greetings: string = "Hello World";

// greetings = true; // Error: Type 'true' is not assignable to type 'string'.
let myNum = 6;

// myNum.toUpper(); // Error: Property 'toUpper' does not exist on type 'number'.
greetings.toUpperCase(); // OK
console.log(greetings);

export {};
