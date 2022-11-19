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
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}















