// ===================================================== using forEach ?

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = [];
// chars.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars);

// ============================================================ using Array.from method ?
// -------------------------------------------------- OR spread operator(...) ?
// const arr = [1,1,2,3,4,4,5,6,7,7,8,9,9]
// const remove = [...new Set(arr)]
// console.log(remove);
// -------------------------------------------------- OR
// const arr = [1,1,2,3,4,4,5]
// function uniq(arr) {
//     return Array.from(new Set(arr));
// }
// console.log(uniq(arr));

// let arr = [1, 2, 3, 3, 4, 5, 5, 6];
// let uniqueArr = Array.from(new Set(arr));
// console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]

// =================================================================------------ using filter method ?
// var arr = [1,1,2,3,4,4,5]
// let uniqueChars = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
// });
// console.log(uniqueChars);

// var unique = [1,1,2,2,3,3,6,6,6,6,];
// function removeDuplicates(unique) {
//     return unique.filter((item,index) => unique.indexOf(item) === index);
// }
// console.log(removeDuplicates(unique));

// ------------------------------------------------ OR find all duplicate values ?
// var arr = [1,1,2,3,4,4,5,6,7,7]
// let uniqueChars = arr.filter((item, index) => {
//     return arr.indexOf(item) !== index;
// });

// console.log("Dublicate value of array :- ",uniqueChars);

// --------------------------
// const dup = arr.filter(a => array.filter(b => b === a).length >1).map(num => array.filter(c => c === num))
// console.log(dup)

// ========================================== Find unique OR Dublicate data ?

// const arr = [1, 2, 3, 4, 5, 1, 3, 6];
// const unique = [];
// const duplicates = [];

// arr.forEach((item) => {
//   if (unique.includes(item)) {
//     duplicates.push(item);
//   } else {
//     unique.push(item);
//   }
// });
// console.log("Unique data:", unique); // [1, 2, 3, 4, 5, 6]
// console.log("Duplicate data:", duplicates); // [1, 3]

// ---------------------------------------------------- OR 
 
// const arr = [1, 2, 3, 4, 5, 1, 3, 6];
// const unique = [...new Set(arr)];
// const duplicates = arr.filter((item, index) => arr.indexOf(item) !==index);
// console.log("Unique data:", unique); // [1, 2, 3, 4, 5, 6]
// console.log("Duplicate data:", duplicates); // [1, 3]

// =================================================== using push method?

// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
// var unique = [];
// for(i=0; i < arr.length; i++){ 
//     if(unique.indexOf(arr[i]) === -1) { 
//         unique.push(arr[i]); 
//     } 
// }
// return unique;
// }
// console.log(removeDuplicates(arr));

// ================================================== max number number ?
//  let arr = [12,18,16,13,14,17,19,11,13,10]
//  let max_x = arr.sort()
//  let n=0
//  for (i of max_x){
//  }
//  n += i
//  console.log(`Find max number in array : ${n}`);

// ----------------------------------------------- find missing number ?
//  let arr = [1,3,5,7,9]
//  let max_x = arr.sort()
//  let missing_num = []
//  let min_num = Math.min(...max_x)s
//  let max_num = Math.max(...max_x)
//  for (let i=min_num; i<max_num; i++){
//     if (max_x.indexOf(i)<0){
//         missing_num.push(i)
//     }
//  }
//  console.log(`All missing number in array :`, missing_num);

// ======================================================================= PRACTICE 

