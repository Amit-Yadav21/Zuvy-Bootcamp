// convert Celsius to Fahrenheit
const CF = 32;
// console.log((CF*9/5)+32);

//  Fahrenheit to Celsius
var celsius = (CF - 32) * 5 / 9;
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

// var a=1;
// var b=2;
// [a,b]=[b,a]
// console.log(a,b);

// var a=3;
// var b=5;
// let c = a;
// a=b;
// b= c;
// console.log(a,b);

// var a=2;
// var b=6;
// a= a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);

// var a=2;
// var b=6;
// a=a^b;
// b=a^b;
// a=a^b;
// console.log(a,b);

// var x = 5;
// var y = 10
// let z = x
// x = y;
// y = z;
// console.log(x,y);


// let a = 4;
// let b = 9;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// ................................. First Digit ?
// Using arithmetic operations:
const num = 345678;
var numAsString = Math.abs(num).toString();
var fd = parseInt(numAsString[0]);
// console.log(fd);

// Using modulus (%) operator:
let number = 12345;
while (number >= 10) {
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
function reverse(a) {
    let reversedStr = Math.abs(a).toString().split('').reverse().join(',');
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

// ...............................reverse number ?
let reversed = num.toString().split('').reverse().join('');
// console.log(parseInt(reversed));

// ...........................Area of rectangle ?
const length = 10;
const breadth = 2;
let area = length * breadth;
// console.log(area);

// ...................................Sum of area and perimeter of a rectangle
let areas = length * breadth;
let perimeter = 2 * (length + breadth);
// console.log(areas + perimeter);

// Given the number of hours,minutes and seconds, return the number of seconds.
function seconds(hours, minutes, seconds) {
    let second = hours * 3600 + minutes * 60 + seconds;
    return second;
}
// console.log(seconds(1,2,32));

// Given years,months and days as input, return the number of days as output.
function days(years, months, days) {
    // write your code here
    let totalDays = (years * 365) + (months * 30) + days;
    // return the number of days
    return totalDays;
}
// console.log(days(0,1,5));

// .....................................count of even number 
function countEvenNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    // return count;

    // return numbers.filter(num => num % 2 === 0).length;

    // return numbers.reduce((count, num) => {
    //     if (num % 2 === 0) {
    //         // console.log(num);
    //       count++;
    //     }
    //     return count;
    //   },0);

    let countofeven = 0
    for (const num of numbers) {
        if (num % 2 === 0) {
            countofeven++;
        }
    }
    return countofeven;

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Number of even numbers:", countEvenNumbers(numbers));

// ................................sum of sqare and cube
function sum(num) {
    // write your code here
    let sqare = num * num;
    let cube = num * num * num;
    let result = sqare + cube;
    // return the answer
    return result;
}
// console.log(sum(10));

// ......................................Area of Circle 
const calculateArea = (radius) => {
    let area_of_a_circle = Math.PI * radius * radius;
    return area_of_a_circle;
}
// console.log(calculateArea(4));

// ............................................Area of Triangle ?
var areaofTriangle = (a, b, c) => {
    const s = (a + b + c) / 2;
    return s;
}
// console.log(areaofTriangle(3,4,5));

// ................................................Calculate of persent 
function percent(num, percentage) {
    let calculateProfit = (num * percentage) / 100;
    return calculateProfit;
}
// console.log(percent(20,5));

// .................Write a code to take time in seconds and convert it into hour, mins and seconds
function time(seconds){
    var Hour = Math.floor(seconds / 3600);
    var Minutes = Math.floor((seconds % 3600) / 60);
    var second = seconds % 60;
    return Hour +":"+ Minutes +":"+ second
}
// console.log(time(4000));