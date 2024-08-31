const input = require('readline-sync')
const num = input.questionInt('Enter your number -:')
// ---------------------------- find fibonachi_number 1 to n ?
var x = 0;
var y = 1;
var z = 0;
while (z <= num) {
    // console.log(z);
    x = y
    y = z
    z = x + y
}

var x = 0;
var y = 1;
var z = 0;
for (let i = 0; z <= num; i++) {
    // console.log(z);
    x = y
    y = z
    z = x + y
}

// ---------------------------------------- find fibonachi_number  Not 1 to n_number ?
var x = 0;
var y = 1;
var z = 0;
const feb_no = []
while (z <= num) {
    // console.log(z);
    feb_no.push(z)
    x = y
    y = z
    z = x + y
}
// console.log("Febonacci_series:-",...feb_no); 

let not_feb = []
for (let i = 0; i <= num; i++) {
    if (!feb_no.includes(i)) {
        // console.log(i);
        not_feb.push(i)
    }
}
// console.log("Not feb_series:-",...not_feb);

// --------------------------------- find perticuler fibonachi Number (Nth) ?
function getNthFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    let temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}
const thirdFibonacci = getNthFibonacci(num);
// console.log(thirdFibonacci); 

// ------------------------------------- check fibonachi_number yes/no ?
var x = 0;
var y = 1;
var z = 0;
while (z < num) {
    x = y
    y = z
    z = x + y
}
if (z === num) {
    // console.log('YES');
}
else {
    // console.log('NO');
}

for (let i = 0; z< num; i++) {
    // console.log(z);
    x = y
    y = z
    z = x + y
}
if (z === num) {
    // console.log('Yes');
}
else {
    // console.log('No');
}

// Stop execution after the program. This will stop the program
process.exit();
// --------------------------------- Find Fibonacci Numbers Between Two Numbers
const start = input.questionInt("Enter your from where number :-")
const end = input.questionInt("Enter your till where number :-")

while (z <= end) {
    if (z > start && z < end) {
        // console.log(z);
    }
    x = y
    y = z
    z = x + y
}
// -------------------
for (z = 0; z <= end;) {
    if (z > start && z < end) {
        // console.log(z);
    }
    x = y;
    y = z;
    z = x + y;
}