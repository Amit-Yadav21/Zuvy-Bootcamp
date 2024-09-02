// =============================== Convert array to string and return the string.
function arrayToString(arr) {
    return arr.join(',');
    // return arr.join('-');
    // return arr.toString(); // Converts the array directly to a comma-separated string.

    // let result = '';
    // for (let i = 0; i < arr.length; i++) {
    //     result += arr[i];
    //     if (i !== arr.length - 1) {
    //         result += ',';
    //     }
    // }
    // return result;

    // return arr.reduce((acc, curr, index) => {
    //     if (index === 0) {
    //         return curr.toString();
    //     } else {
    //         return acc + ',' + curr.toString();
    //     }
    // }, '');
}
// console.log(arrayToString([1, 2, 3])); // Output: '1,2,3'

// ======================================= array convert into object
//  array me jo value hai vah object ka value aur array ka index key ke formate ho ?

const array_ = [1, 2, 3];
const obj = { ...array_ };
// console.log(obj);    // { 0: 1, 1: 2, 2: 3 }


const arrays = [1, 2, 3];
let n = {}
for (i in arrays) {
    n[i] = arrays[i]
}
// console.log(n);
