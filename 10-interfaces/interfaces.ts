interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail(): string;
    getCoupon(couponname: string): number;
}

const rokas: User = {dbId: 22, email: "rokas@rokas.com", userId: 2211,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name: "Rokas") => {
        return 10;
    }
};

rokas.email = "rokas@hi.com";
// rokas.dbId = 22 // Error
