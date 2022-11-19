"use strict";
class User {
    constructor(email, name) {
        this.city = "New York";
        this.email = email;
        this.name = name;
    }
}
const rokas = new User("h@h.com", "Rokas");
// rokas.city = "Delhi"; // Error: Cannot assign to 'city' because it is a read-only property.
// rokas.city = 4; // Error
