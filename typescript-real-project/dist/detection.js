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
        if (typeof strc === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
