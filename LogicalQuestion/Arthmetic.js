// convert Celsius to Fahrenheit
const CF = 32;
// console.log((CF*9/5)+32);

//  Fahrenheit to Celsius
var celsius = (CF - 32) * 5/9;
// console.log(celsius);

// ............................ swap two numbers ?
let a = 5;
let b = 10;
// Using a temporary variable
let temp = a;
a = b;
b = temp;
// console.log("a =", a); // Output: a = 10
// console.log("b =", b); // Output: b = 5

// Using addition and subtraction
a = a + b;
b = a - b;
a = a - b;
// console.log("a =", a);
// console.log("b =", b);

// Using bitwise XOR (^) operator:
a = a ^ b;
b = a ^ b;
a = a ^ b;
// console.log("a =", a); // Output: a = 10
// console.log("b =", b); // Output: b = 5

// Using ES6 destructuring assignment:
[a, b] = [b, a];
// console.log("a =", a); // Output: a = 10
// console.log("b =", b); // Output: b = 5

// ................................. First Digit ?
// Using arithmetic operations:
const num = 345678;
var numAsString = Math.abs(num).toString();
var fd = parseInt(numAsString[0]);
// console.log(fd);

// Using modulus (%) operator:
let number = 12345;
while(number >= 10) {
    number = Math.floor(number / 10);
}
let firstDigit = number;
// console.log("First digit:", firstDigit);

// Using a loop and string conversion:
let strNumber = num.toString();
let f_Digit;
for (let digit of strNumber) {
    if (digit !== '0') {
        f_Digit = parseInt(digit);
        break;
    }
}
// console.log("First digit:", f_Digit); // Output: First digit: 1

// ..................... som of first and last digit ?
const convertSTR = num.toString();
var firstD = parseInt(convertSTR[0]);
var lastDigit = num % 10;
// let lastDigit =parseInt(convertSTR[convertSTR.length-1]);
// var lastDigit = parseInt(convertSTR.slice(-1));
var sumofFL = firstD + lastDigit;
// console.log(`Number is ${num}, first digit :${firstD}\nNumber is ${num}, lastdigit :${lastDigit}\nsum of F  num is ${firstD} and L  num is ${lastDigit} :- ${sumofFL}`);

// reverse of that number. Return comma seperated value
function reverse(a){
  let reversedStr=Math.abs(a).toString().split('').reverse().join(',');
  if (a < 0) {
      reversedStr = '-' + reversedStr;
  }
  return reversedStr;
}
// console.log(reverse(num));   // 6,5,1

// .................. find after and before number 
let a1 = 100;
let b1 = 33;
let c = a1 / b1;
// console.log(`Output if C :- ${c}\nBefore Decimal :- ${String(c).split('.')[0]}\nAfter Decimal :- ${String(c).split('.')[1]}`);
