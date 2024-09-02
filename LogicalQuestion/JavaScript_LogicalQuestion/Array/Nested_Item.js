// =================================== nested array data find output single array  ?
const nest_arr = [1, 2, [3, 4, [5, 6, [1, 2]], 4, 3], 2, 4]
const resu = nest_arr.flat(Infinity)
a = resu.sort()
// console.log(a);         // output :- [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6 ]

// ============================= find string/boolean/number in array ?

const array4 = [["jay", [90, 85, 95]], ["amit", [70, 60, 50, false]], ["aniket", [20, 50, 40, true]]];
const resul = array4.flat(Infinity).filter((element) => typeof element === "number")  // string/boolean/number
// console.log(resul);   // [ 90, 85, 95, 70, 60,50, 20, 50, 40 ] 

// ------------------------------ find float value array ?
const array5 = ["amit", "kumar", "yadav", 1, 3, 5, 6, true, false, 1.8, 3.5, 0.4];
const floatArr = array5.filter((value) => typeof value === "number" && Number.isFinite(value) && !Number.isInteger(value));
// console.log("Float values in array: ", floatArr);
// ------------------------------------------------------
a = [2, 4.5, 7, 6, 5, 0.4, "dygf", 6, [7, 6, 12, "dafag", 0.6, "sg", 7.6,], 62, "fsgw", 6, 5.6, "wgyw", 5]
let ARR = a.flat().sort((a, b) => a - b).filter(ele => typeof ele === 'number');
// console.log(ARR)