var score = 100;
score = 44;
score = '44';
var rokas = {
    name: 'Rokas',
    id: 1
};
rokas = {
    username: 'Rokas',
    id: 1
};
// function getDbId(id: number | string) {
//     // making some API call
//     console.log(`Getting db id for ${id}`);
// }
getDbId(1);
getDbId("1");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = [1, "2", "3", "4", true];
//# sourceMappingURL=union.js.map