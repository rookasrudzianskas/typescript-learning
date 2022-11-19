function addTwo(num: number) {
    // num.toUpperCase(); // Error
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

getUpper("Rokas"); // OK
addTwo(2); // 4
signUpUser("Rokas", "rokas.rudzenskas@gmail.com", false); // OK
loginUser("Rokas", "hello@hello.com"); // OK

export {};
