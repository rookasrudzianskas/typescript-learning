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

    protected _courseCount = 1;

    readonly city: string = "New York";
    constructor(
        public email: string,
        public name: string,
        // private userId: string,
    ) {}

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNumber) {
        if(courseNumber <= 1) {
            throw new Error("Course number should be greater than 1");
        }
        this._courseCount = courseNumber;
    }
}

class SubUser extends User {
    // it cannot acquire private properties
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 2;
    }
}

const rokas = new User("h@h.com","Rokas");
