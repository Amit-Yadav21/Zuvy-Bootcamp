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

// -----------------------------------------------------  the sum of natural numbers given range ?
// const input = require('readline-sync')
// const number = input.questionInt("Enter first number: ");
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:', sum);

// -------------------------------------------- checks if the number is positive, negative or zero
// const input = require('readline-sync')
// const number = input.questionInt("Enter number: ");
// if (number > 0) {
//     console.log("The number is positive");
// }
// else if (number == 0) {
//   console.log("The number is zero");
// }
// else {
//      console.log("The number is negative");
// }

// ------------------------------------------ program to check whether the last digit of three numbers is same 
// const input = require('readline-sync')
// const a = input.questionInt("Enter first number: ");
// const b = input.questionInt("Enter second number: ");
// const c = input.questionInt("Enter third number: ");

// const result1 = a % 10;
// const result2 = b % 10;
// const result3 = c % 10;

// if(result1 == result2 && result1 == result3) {
//     console.log(`${a}, ${b} and ${c} have the same last digit.`);
// }
// else {
//     console.log(`${a}, ${b} and ${c} have different last digit.`);
// }

// --------------------------------------------- Calculate the power of a number.
function powerOf(base, exponent) {
    return Math.pow(base, exponent);
}
//   console.log(powerOf(2, 3)); // Output: 8 (2^3 = 8)

// ---------------------------------------------------- Check if a number is a perfect square
// function isPerfectSquare(number) {
//     return Math.sqrt(number) % 1 === 0
//         ? `${number} is a perfect square`
//         : `${number} is not a perfect square`;
// }
console.log(isPerfectSquare(25)); // Output: 25 is a perfect square  

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

// ------------------------------------------------------
// let num1 = 3;
// let num2 = 2;
// let result = num1 / num2;
// let decimalPart = result - Math.floor(result);
// console.log(decimalPart);

// let num1 = 3;
// let num2 = 2;
// let result = num1 / num2;
// let convert = result.toString()
// let afterDecimal = convert[convert.length -1] 
// console.log(afterDecimal);

// let num1 = 3;
// let num2 = 2;
// let result = num1 / num2;
// let decimalPart = result % 1;
// console.log(decimalPart);

// last number ?
// let num =123
// let last = num.toString().split('').pop();
// console.log(last);

// let number = 12345;
// let lastDigit = number % 10;
// console.log(lastDigit);

// let number = 12345;
// let lastDigit = parseInt(number.toString().slice(-1));
// console.log(lastDigit);

// let number = 12345;
// let lastDigit = Math.abs(number) % 10;
// console.log(lastDigit);

// function reverse(a) {
//     let reversedString = Math.abs(a).toString().split('').reverse().join(',');

//     if (a < 0) {
//         reversedString = '-' + reversedString;
//     }
//     console.log(reversedString);
// }
// reverse(-123)