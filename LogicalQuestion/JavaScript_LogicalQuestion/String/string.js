const str = 'my name is amit yadav'
const newstr = str.split('').reverse().join('')
// console.log(newstr);
// ------------------------------------------
var inputString = "hello";
var arr = inputString.split("").sort().join('');
// console.log(arr) // ehllo

// ------------------------------------------------reverse string  Using Loop ?
let name1 = "your name is amit"
let newString = ""
for (let i = name1.length - 1; i >= 0; i--) {
    newString += name1[i]
}
// console.log(newString);

// ---------------------------------------------------reverse string Using reduce/map method ?

let st = "amit";
let reversedStr = st.split('').reduce((acc, char) => char + acc);
// console.log(reversedStr);

const str_ = "amit";
const reversed = str_.split('').map((item, index, array) => array[array.length - index - 1]).join('');
// console.log(reversed);   // tima

// ------------------------------------------------------ Conditional (Ternary) Operator 
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
// console.log(reverseString("hello"));

function reverse1(str) {
    var r = "";
    for (var i = str.length - 1; i >= 0; i--) {
        r += str.charAt(i);
    }
    return r;
}
// console.log(reverse1('amit'));


// ================================================================================ reverse strng self place ?
const data_str = "I LOVE YOU"
let s = data_str.split(" ").map((ele) => ele.split("").reverse().join('')).join(" ")
// console.log(s); 

// ============================= Sepret Capital and Small value ?

let a = 'abcRTY'
let capital = ''
let small = ''
for (let i of a) {
    if (i.toLocaleUpperCase() === i) {
        capital += i
    } else {
        small += i
    }
}
// console.log(`All capital letter here :-${capital}\nAll small letter here :-${small}`);


// --------------------------------------------------- OR ?

// const sr = 'AmiT'
// let capital = ''
// let small = ''
// for(let l of sr){
//     if(l.charCodeAt()>=64 && l.charCodeAt()<92){
//         capital= capital + l
//     }else{
//         small = small+l
//     }
// }
// console.log(capital,small);

// ======================================================================= count dublicate values from string ?
// output :- { a: 3, n: 1, i: 4, k: 1, e: 1, t: 3, w: 1, r: 1, m: 1 }

let take_input = 'anikettiwariamit';
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

// ------------------------------------- count dublicate 
function removeDuplicates(str) {
    const charMap = {};
    let result = '';
    for (let char of str) {
        if (!charMap[char]) {
            result += char;
            charMap[char] = true;
        }
    }
    return result;
}
// console.log(removeDuplicates("hello")); // Output: helo
// ================================================================== print number in single line ? 
var empaty_str = "";
for (var i = 1; i <= 20; i += 1) {
    s += i + " ";
}
// console.log(empaty_str);

// ------------------

// var userNo = 1;
// while (userNo <= 10) {
//  console.log(userNo);
//  userNo++;
// }

// ===============================================================

// for ( var i = 1; i <= 5; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else if ( i%2 === 0)
//   {
//     console.log(i+ " even number");
//   }
//   else if ( i%2 != 0)
//   {
//     console.log(i+ " odd number");
//   }
// //   else if (i%i === 0)
// //   {
// //     console.log(i+ " prime number");
// //   }
//   else
//   {
//     console.log(i);
//   }
// }

// =============================================
var strData = 'amit yYadav';
var vowels = strData.match(/[aeiou]/gi); // [] is colling range and /g for globle and i for small/capital letter 
var consonants = strData.match(/[^aeiou\s]/gi).length; // (\s) is use to remove space, ^ is a Caret symble use in negative way
// var consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/g);

// console.log(`Vowels: ${vowels}\nConsonants: ${consonants}`);
// --------------------------------------------------
var stri = "amit yadav"
let vow = 0
let conso = 0
let vowels_ = ['a', 'e', 'i', 'o', 'u']
for (ch of stri.toLowerCase()) {
    if (vowels_.includes(ch)) {
        vow++
    }
    else {
        conso++
    }
}
// console.log(`vowels here : ${vow}\nconsonents : ${conso}`);

// -----------------------------------------
// const data = 't'
// if (data == 'a' || data == 'e' || data == 'i' || data == 'o' || data == 'u') {
//     console.log('vowels');
// }
// else {
//     console.log('consonents');
// }

// ======================================== capital every frist letter in word 
const aa = 'my name is amit yadav'
var capitalizedString = aa.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
});
// console.log(capitalizedString);

function convertToTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(convertToTitleCase("hello world")); // Output: Hello World

function capitalizeWords(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}
// console.log(capitalizeWords("hello world")); // Output: Hello World

// ----------------------------------
var sentence = "this simple approach allows you to capitalize the first letter of every word in a string using a single line of code";
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

var capitalizedSentence = words.join(" ");
// console.log(capitalizedSentence);

// --------------------------
const sen = "this simple approach allows you to capitalize the first letter of every word in a string using a single line of code";
let output = sen.split(' ').map(str => {
    return str[0].toLocaleUpperCase() + str.slice(1)
})
// console.log(output.join(' '));

// ----------------------------------
// Check if a given string is a substring of another string
function isSubstring(sub, str) {
    return str.includes(sub) ? `${sub} is a substring of ${str}` : `${sub} is not a substring of ${str}`;
}
//   console.log(isSubstring("cat", "concatenate")); // Output: cat is a substring of concatenate

//----------------------------------------------- Count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelcount = 0;
    let consonentcount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelcount++;
        }
        else if (!vowels.includes(char.trim())) {
            consonentcount++;
        }
    }
    return `vowels in ${str} is: ${vowelcount} and consonent is ${consonentcount}`;
}
// console.log(countVowels("Hello World amit")); 

// -------------------------------- Remove all occurrences of a specified character from a string
function removeCharacter(str, char) {
    return str.split(char).join('');
}
// console.log(removeCharacter("hello world", "o")); 

// ==========================================================

function calculateProfitOrLoss(x, y) {
    if (x < y) {
        return "profit";
    } else {
        return "loss";
    }
}
// console.log(calculateProfitOrLoss(50, 70));
// console.log(calculateProfitOrLoss(50, 30));      

function checkPositiveOrNegative(number) {
    if (number > 0) {
        return "positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "neither positive nor negative";
    }
}
// console.log(checkPositiveOrNegative(127)); 
// console.log(checkPositiveOrNegative(-127)); 

// ..................................................
// Write a program to check if the given number is multiple of 11 or not. If the given number is multiple of 11 then print the 3rd power of the number else return the number.
function checkMultipleOf11OrPower(num) {
    if (num % 11 === 0) {
        return Math.pow(num, 3);
    } else {
        return num;
    }
}
// console.log(checkMultipleOf11OrPower(10));  // Output: 10
// console.log(checkMultipleOf11OrPower(11));  // Output: 1331

// ......................................
function reverseEqual(num) {
    let numStr = num.toString();
    let sortedNumStr = numStr.split("").sort().join("");
    
    if (numStr === sortedNumStr) {
        return "yes";
    } else {
        return "no";
    }
}
// console.log(reverseEqual(123));  
// console.log(reverseEqual(1221)); 

// If length of the string is greater than 10 return "YES" else return "NO".
function greater(string) {
    let str_lenght = string.length;
    if (str_lenght >= 10) {
        return "YES";
    }
    else {
        return "NO";
    }
}
// console.log(greater('amit yadav'));

// Given a string, count the number of vowels present in the string and return it.
function vowels(string) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++
        }
    }
    return count;
}
// console.log(vowels());

// Change all the lowercase characters to uppercase and uppercase character to lowercase then return the string.
function upperLower(strings) {
    let result = '';
    for (let char of strings) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
// console.log(upperLower('AirCampus'));

// Given a string and a character, remove all the occurence of the given character and return the string.
function removeAllOccurrences(string, letter) {
    // return string.split(letter).join('');

    const regex = new RegExp(letter, 'g');
    // return string.replace(regex, '');

    // Convert both the string and the letter to lowercase (or uppercase)
    string = string.toLowerCase();
    letter = letter.toLowerCase();
    // return string.split(letter).join('');

    // removing all the whitespace
    return string.split('').filter(l => l.trim() !== '').join('');

}
const ts = "aicam Apus";
const LR = 'a';
// console.log(removeAllOccurrences(ts, LR));

// Return the string after removing all the whitespace
function rws(string) {
    return string.split(' ').join('');
    // return string.split('').filter(char => char !== ' ').join('');

    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            result += string[i];
        }
    }
    // return result;

    // removing all the whitespace from the start/end of the string
    // return string.trimStart();
    // return str.trimEnd();

}
// console.log(rws('    java script     '));
//......................................................
// return the last four characters of the given string. The string length will always be greater than equal to four.
const inputString = 'javascript';
const lFCharacters = inputString.slice(-4);
// console.log(lFCharacters);
const lastFourCharacter = inputString.substr(-4);
// console.log(lastFourCharacter);
const lastFourCharacters = inputString.substring(inputString.length - 4);
// console.log(lastFourCharacters);
//.............................................
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
//...............................................
// Given a string, add all the characters of the string to an array, excluding whitespaces. Return the character array
var string = "amit yadav"
let a_variable = string.split('').filter(char => char !== ' ');
// console.log(a_variable);

const result = [];
for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
        result.push(string[i]);
    }
}
// console.log(result);

const tring = 'yadav amit'
let aa_variable = tring.replace(/\s/g, '').split('');
// console.log(aa_variable);

const iString = 'java script';
// console.log(removeWhitespace(iString)); 
//.................................................

function addWordToEnd(sentence, word) {
    return sentence + " " + word;   // Using String Concatenation
    return `${sentence} ${word}`;   //Using Template Literals
    return sentence.concat(" ", word);  // Using concat() Method
    return [sentence, word].join(' '); // Using String Concatenation in Array and join()

    let words = sentence.split(' ');
    words.push(word);
    return words.join(' ');

}
// console.log(addWordToEnd('amit','yadav'));

// Given a string and two index values, return the string from the start index to end index.
function substring(str, a, b){
    return str.substring(a, b);
    return str.substr(a, b);
    return str.slice(a, b);

    let result = '';
    for (let i = a; i <= b && i < str.length; i++) {
        result += str[i];
    }
    return result;
}
// console.log(substring('javascript',4,10));

// replace Ram with Shyam
function ramShyam(str){
    // replace the first occurrences of Ram with Shyam
    // return str.replace("Ram", "Shyam")
    
    // Replace all the occurence of Ram with Shyam 
    return str.replace( /Ram/g, "Shyam");
}
// console.log(ramShyam('Ram owns a dog. Ram likes animals'));

// return all the characters of string separated by comma (,)
function commaSep(str){
    return str.split('').join(','); // j,a,v,a,s,c,r,i,p,t
    // return str.split(' ').join('').split('') // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
    
}
// console.log(commaSep('javascript'));

// check if they are anagrams or not. If they are anagrams return true else return false.
function anagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    if (sortedStr1 === sortedStr2) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(anagram('elbow', 'below'));

// Return true if the given strings is palindrome else return false
function palindrome(pali) {
    let empty = ""
    for (let i of pali) {
        empty = i + empty
    }
    if (str === empty) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
// console.log(palindrome('arora'));

// Reveres the given string word by word then return the reversed string
let ab = 'the name is amit'
let rs_wordByword = ab.split(' ').reverse().join(' ');  // amit is name the
// let rs_wordByword = ab.split('').reverse().join(''); //tima si eman eht
// console.log(rs_wordByword); 

// alphanumeric
// return /^[a-zA-Z0-9]+$/.test(str);

// Return true if the email is valid else return false
function validEmail(str) {
    if (str.includes('@') && str.includes('.')) {
        return true;
    } else {
        return false;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return regex.test(str);
}
// console.log(validEmail('amit21nagurukul.org'));

// Return the string after removing all the leading and trailing zeroes
function removeZeroes(str) {
    let num = parseFloat(str);
    return num.toString();
}
// console.log(removeZeroes(230.00)); 

// .................................... capitalize the first letter of each word.
function capitalization(str){
    let arr = str.split(' ');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(' ');
}
// console.log(capitalization('This is a title'));

function capitalizeFirstLetter(str) {
    // return str.charAt(0).toUpperCase() + str.slice(1);
    // return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    // return str[0].toUpperCase() + str.slice(1);
    // return str.replace(/^\w/, match => match.toUpperCase());
    const [first, ...rest] = str;
    return `${first.toUpperCase()}${rest.join('')}`;

}
// console.log(capitalizeFirstLetter('his is a title'));

function getFirstLetters(sentence) {
    return sentence.split(' ').map(word => word.charAt(0)); // Using split() and map()

    // Using split() and forEach()
    const words = sentence.split(' ');
    const firstLetters = [];
    words.forEach(word => {
        firstLetters.push(word.charAt(0));
    });
    // return firstLetters; 

    // Using split() and filter()
    // return sentence.split(' ').filter(word => word.length > 0).map(word => word[0]);

    // Using split() and a for loop:
    const Words = sentence.split(' ');
    const firstL = [];
    for (const word of Words) {
        if (word.length > 0) {
            firstL.push(word.charAt(0));
        }
    }
    // return firstL;

}
// console.log(getFirstLetters('This is a sample sentence'));

//............ return the middle character, if the string length is odd, else return the middle two characters.
function middleChar(str) {
    const length = str.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return str.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return str.charAt(middleIndex);
    }
}
// console.log(middleChar('testingAmkit'));

// ... You are given a string, add a space before every capital letter, then uncapitalize the entire string.
function capitalSplit(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            result += ' ' + char.toLowerCase();
        } else {
            result += char;
        }
    }
    result = result.trim();    
    return result;
}
// console.log(capitalSplit("JavaScriptIsFun")); // Output: java script is fun

// You are given two numbers in an array of integer, return the sum of all the alternate numbers between the two number.
// Both the numbers are inclusive.
function alternateSum(arr) {
    const start = arr[0];
    const end = arr[1];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
const numbers = [1, 5];
// console.log(alternateSum(numbers)); // Output: 9