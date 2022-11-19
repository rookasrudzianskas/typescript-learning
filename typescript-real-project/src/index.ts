class User {
    email: string;
    name: string;
    readonly city: string = "New York";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const rokas = new User("h@h.com","Rokas");
// rokas.city = "Delhi"; // Error: Cannot assign to 'city' because it is a read-only property.
// rokas.city = 4; // Error
