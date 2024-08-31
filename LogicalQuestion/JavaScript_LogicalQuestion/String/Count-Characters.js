// ====================================== Count duplicates in a string
const take_input = 'amit kumar yadav'
let array = take_input.split('');
// console.log(arr);
let obj = {};
for (let i of array) {
    if (!obj[i]) {
        obj[i] = 0
    }
    obj[i] += 1
}
// console.log(obj);

// ---------------------------------------------
const str = "hello world";
var charCount = {};
for (let char of str) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

// console.log(charCount);
// Output: { 'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1 }

// -------------------------------------------------
let take = 'anikettiwariamit';
var charCount = {};
for (let char of take) {
    charCount[char] = (charCount[char] || 0) + 1;
}
// console.log(charCount);

// --------------------------------------------------
// Given a string, find out how many times ‘e’ is present in the string. Return the count of ‘e.’
function countE(string) {
    let indices = [];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'e') {
            indices.push(i);
            count++;
        }
    }
    return `count of 'e': ${count}\nfind index of 'e': ${indices}`;

    // return string.split('e').length - 1;

    // return (string.match(/e/g) || []).length;

    return [...string].reduce((count, char) => char === 'e' ? count + 1 : count, 0);

    return string.split('').filter(char => char === 'e').length;
}
// console.log(countE('Hello my name'));