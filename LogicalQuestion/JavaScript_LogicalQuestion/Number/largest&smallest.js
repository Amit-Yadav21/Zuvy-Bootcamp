function findLargestNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return `The largest number is: ${max}`;
}
// console.log(findLargestNumber(10, 25, 7)); // Output: The largest number is: 25
// -----------------------------------------------
function secondLargestNumber(arr) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax && num !== firstMax) {
      secondMax = num;
    }
  }

  return `The second largest number is: ${secondMax}`;
}
// console.log(secondLargestNumber([10, 20, 15, 35, 25])); // Output: The second largest number is: 25
// console.log(secondLargestNumber([9, 9, 9, 9])); // Output: The second largest number is: -Infinity

//................................................ find the largest among three numbers
// const input = require('readline-sync')
// const num1 = input.questionInt("Enter first number: ");
// const num2 = input.questionInt("Enter second number: ");
// const num3 = input.questionInt("Enter third number: ");
// let largest;

// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// console.log("The largest number is :-" + largest);

// .......................................................... find the largest among three numbers using math.max()
// const input = require('readline-sync')
// const num1 = input.questionInt("Enter first number: ");
// const num2 = input.questionInt("Enter second number: ");
// const num3 = input.questionInt("Enter third number: ");

// const largest = Math.max(num1, num2, num3);
// console.log("The largest number is " + largest);
