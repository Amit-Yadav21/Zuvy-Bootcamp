// const factorial = 1
// num = 4
// for (let i=num; i>=1; i--){
//     factorial *=i
// }
// // console.log(factorial);

// var n = 4
// var ans = 1;
// for (var i = 2; i <= n; i++)
//     ans = ans * i;
// // console.log(ans);

// function Factorial(n) {
//     var ans=1;
//     for (var i = 2; i <= n; i++)
//         ans = ans * i;
//     return ans;
// }
// // console.log(Factorial(5));


// Sample array
// const myArray = ['apple', 'banana', 'cherry'];
// const result = myArray.map((ele, index, array) => {
//   console.log(`ele : ${ele}, index: ${index}, array: ${array}`);
// //   return value; // You need to return the original value or a modified one
// });
// The 'result' array will contain the same values as 'myArray'
// console.log(result);


// const numbers = [1, 2, 3, 4, 5,'apple', 'banana', 'cherry'];
// const indices = numbers.map((value, index) => index);
// console.log(indices);
// Output: [0, 1, 2, 3, 4]

const numbers = [1, 2, 3, 4, 5];
numbers.map((value, index) => {
  const result = value * 3;
  console.log(`Index: ${index}, Multiplied Value: ${result}`);
  return result; // Return the multiplied value if needed
});
