// output here with space
//       1
//     2   2
//   3   3   3

// output here without space
//   1
//  22
// 333

// const input = require('readline-sync')
// let pattern = ''
// const a = input.questionInt('give range : ')
// for (let i = 1; i <= a; i++) {
//     let t = a-i
//     pattern+=' '.repeat(t)
//     for (let j = 1; j <= i; j++) {
//         pattern+=`${i} `      // output with space
//         // pattern+=`${i}`      // output without space

//     }
//     pattern+='\n'  
// }
// console.log(pattern);

// --------------------------------------------------------------------
// output here -
// 1
// 22
// 333
// 4444
// 55555

// let n = 5; // height of pattern
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     // string += `${i}`        // output without space
//     string += `${i} `    // output with space 
//   }
//   string += "\n";
// }
// console.log(string);

// ----------------------------------------------------------------
// output here 
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 

// let n = 5;         
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += `${j} `
//   }
//   string += "\n";
// }
// console.log(string);

// -------------------------------------------------------------
// output here
// 1
// 2 3
// 4 5 6
// 7 8 9 10


// let n = 4;   // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     string += `${count} `;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

//------------------------------------
// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - j - i + 2;
//   }
//   string += "\n";
// }
// console.log(string);

// output here -
// 54321
// 4321
// 321
// 21
// 1