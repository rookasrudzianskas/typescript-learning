function detectTypes(val: number | string) {
    if(typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null) {
    if(!id) {
        console.log("No id provided");
        return;
    }
    id.toLowerCase();
}


function printAll(strs: string | string[] | null) {
    if (strs) {
        // if(typeof strc === "object") {
        //     for (const s of strs) {
        //         console.log(s);
        //     }
        // }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}


interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    // checks if isAdmin is in account interface
    // narrowing with in property
    if("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}




function logValue(x: Date | string) {
    // checks if x is instance of date
    // narrowing with instanceof
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {
    swim: () => void;
};

type Bird = {
    fly: () => void;
};

// this shows, that pet is going to be fish for sure
function isFish(pet: Fish | Bird): pet is Fish {
    // narrowing with type guard
    // if it as method swim, then it is a fish
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        return "fish food";
    } else {
        pet
        return "bird food";
    }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}







