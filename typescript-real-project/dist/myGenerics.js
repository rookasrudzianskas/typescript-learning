"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// this could be anything
function identityTwo(val) {
    return val;
}
// this is almost like any, I am ready to accept any, string, number
// this is then I give a number, so the value I accept is number
// and the value I return is number
// We are locking the value in here
function identityThree(val) {
    return val;
}
// identityThree(true);
// same as the third one
// H could be as well a number, string, boolean
function identityFour(val) {
    return val;
}
// in this case we pass the custom type
identityFour({ brand: "Coca Cola", type: 1 });
