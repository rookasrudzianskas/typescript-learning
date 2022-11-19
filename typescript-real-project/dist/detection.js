"use strict";
function detectTypes(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("No id provided");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        // if(typeof strc === "object") {
        //     for (const s of strs) {
        //         console.log(s);
        //     }
        // }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
function isAdminAccount(account) {
    // checks if isAdmin is in account interface
    // narrowing with in property
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
