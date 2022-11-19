interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail(): string;
    getCoupon(couponname: string, value: number): number;
}

const rokas: User = {dbId: 22, email: "rokas@rokas.com", userId: 2211,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name: "Rokas", off: 2) => {
        return 10;
    }
};

rokas.email = "rokas@hi.com";
// rokas.dbId = 22 // Error
