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
// products: T[] - this is the type of value we are taking
// T is the type of what we are returning
// T should be value from that array
function getSearchProducts(products) {
    // Do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// const getMoreSearchProducts = (products: number[]): number => {
//     // Do some database operations
//     const myIndex = 4;
//     return products[myIndex];
// }
// , this is syntax for generics
// const getMoreSearchProducts = <T,>(products: T[]): T => {
//     // Do some database operations
//     const myIndex = 4;
//     return products[myIndex];
// }
