// Using split, reverse, and join
const str = 'my name is amit yadav';
const reversedStr = str.split('').reverse().join('');
// console.log(reversedStr); // "vadY timA si eman ym"

// reverse strng self place ?
const data_str = "I LOVE YOU"
let s = data_str.split(" ").map((ele) => ele.split("").reverse().join('')).join(" ")
// console.log(s);

// Using loop
let name1 = "your name is amit";
let newString = "";
for (let i = name1.length - 1; i >= 0; i--) {
    newString += name1[i];
}
// console.log(newString); // "tima si eman ruoy"

// Reveres the given string word by word then return the reversed string
let ab = 'the name is amit'
let rs_wordByword = ab.split(' ').reverse().join(' ');  // amit is name the
// let rs_wordByword = ab.split('').reverse().join(''); //tima si eman eht
// console.log(rs_wordByword);

// Using reduce
let st = "amit";
let reversedStrReduce = st.split('').reduce((acc, char) => char + acc);
// console.log(reversedStrReduce); // "tima"

// Using map
const str_ = "amit";
const reversedStrMap = str_.split('').map((item, index, array) => array[array.length - index - 1]).join('');
// console.log(reversedStrMap); // "tima"

// Conditional (Ternary) Operator
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
// console.log(reverseString("hello")); // "olleh"

// ------------------------------------------
var inputString = "hello";
var arr = inputString.split("").sort().join('');
// console.log(arr) // ehllo

function reverse1(str) {
    var r = "";
    for (var i = str.length - 1; i >= 0; i--) {
        r += str.charAt(i);
    }
    return r;
}
// console.log(reverse1('amit'));