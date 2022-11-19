interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail: () => string;
}

// Hey does pilot work?
// Do you work ok?
// GitHub are you working???
// Any help? Bro??? Bro? Any help? Thanks bro.

const rokas: User = {dbId: 22, email: "rokas@rokas.com", userId: 2211,
    startTrail: () => {

    }
};

rokas.email = "rokas@hi.com";
// rokas.dbId = 22 // Error
