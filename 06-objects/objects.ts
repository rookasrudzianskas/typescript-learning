// const User = {
//     name: 'John',
//     email: "rokas.rudzianskas@gmail.com",
//     isActive: true,
// }
//
// function createUser({ name: string, isPaid: boolean}) {}
//
// let newUser = {name: "Rokas", isPaid: false, email: "h@h.com"};
//
// createUser(newUser);
//
//
//
// function createCourse():{ name: string, price: number} {
//     return { name: "Reactjs", price: 100 };
// }
//
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }
//
// function createUser(user: User): User{
//     return {
//         name: "",
//         email: "",
//         isActive: false
//     }
// }
//
// createUser({ name: "Rokas", email: "", isActive: true });


type User = {
    readonly _id: string; // readonly - can't be changed
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number; // optional
}

let myUser: User = {
    _id: "123",
    name: "Rokas",
    email: "",
    isActive: false,
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardData: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
};

myUser.email = "h@h.com";
// myUser._id = "1234"; // error






















export {};
