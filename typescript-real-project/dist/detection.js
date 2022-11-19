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
    // checks if x is instance of date
    // narrowing with instanceof
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// this shows, that pet is going to be fish for sure
function isFish(pet) {
    // narrowing with type guard
    // if it as method swim, then it is a fish
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
