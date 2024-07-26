let arr = ['amit', 'kumar', 'yadav', 'city', 'jaunpur'];
// -------------skip the second element in array with (,)
let [firstname, ,lastName] = arr;
// console.log({firstname,lastName});

let empty = {};
[empty.firstname, empty.lastName] = arr;
// console.log(empty);

let [FName, LName, ...rest] = arr;
// console.log({firstname,lastName,rest});

const array = [];
let [fn = "amit", ln = "yadav", ...rests] = array;
// console.log({fn,ln,rests});

const nestedArray = [1, [2, 3], 4];
const [aa, [bb, c], d] = nestedArray;
// console.log(aa, bb, c, d); // Output: 1 2 3 