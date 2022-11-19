"use strict";
// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = "New York";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// rokas.city = "Delhi"; // Error: Cannot assign to 'city' because it is a read-only property.
// rokas.city = 4; // Error
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "New York";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course number should be greater than 1");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        // it cannot acquire private properties
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const rokas = new User("h@h.com", "Rokas");
