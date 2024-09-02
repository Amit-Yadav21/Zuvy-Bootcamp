// ======================================== count dublicate values from array ?
let arr_1 = [1, 2, 4, 5, 2, 8, 5, 9, 0, -2,]
let obj_1 = {};
for (let i of arr_1) {
    if (!obj_1[i]) {
        obj_1[i] = 0
    }
    obj_1[i] += 1
}
// console.log(obj_1);

// ------------------------------------ OR ?
Str = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'h', 'e', 'a'];
var obje = {}
for (var i = 0; i < Str.length; i++) {
    if (obje[Str[i]] != null) {
        obje[Str[i]] += 1;
    } else {
        obje[Str[i]] = 1;
    }
}
// console.log(obj);

const allStudentsAge = [
    [1, 19],
    [3, 4],
    [5, 19],
    [7, 8, 19],
    [10, 11, 12, 13, 14, 15],
    [19, 22, 18, 19, 12, 18, 19, 12, 24]
];
let target = 19;
let counter = 0;
for (studentAge of allStudentsAge.flat()) {
    if (studentAge == target) {
        counter++;
    }
};

// console.log(counter); // 6