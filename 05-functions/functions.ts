function addTwo(num: number): number {
    // num.toUpperCase(); // Error
    return num + 2;
    // return "hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

let myValue = addTwo(2);
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

const getHello = (s: string): string => {
    return "";
}

const heros = ["Batman", "Superman", "Spiderman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
    return `Hero is ${hero}`;
});

function consoleError(errorMessage: string): void {
    console.log("Error", errorMessage);
}

function handleError(errorMessage: string): never {
    throw new Error(errorMessage);
}

export {};
