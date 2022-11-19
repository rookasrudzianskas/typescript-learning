let score: number | string = 100;

score = 44;
score = '44';

// Path: 08-union/union.ts

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}


let rokas: User | Admin = {
    name: 'Rokas',
    id: 1
}

rokas = {
    username: 'Rokas',
    id: 1
}

// function getDbId(id: number | string) {
//     // making some API call
//     console.log(`Getting db id for ${id}`);
// }

getDbId(1);
getDbId("1");

function getDbId(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase();
    }
}

// Array
const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number | boolean)[] = [1, "2", "3", "4", true];
