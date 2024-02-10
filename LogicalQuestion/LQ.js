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

// ........................................
function calculateProfitOrLoss(x, y) {
    if (x < y) {
        return "profit";
    } else {
        return "loss";
    }
}
// console.log(calculateProfitOrLoss(50, 70));
// console.log(calculateProfitOrLoss(50, 30));

// ...................................
// Number of Vowels
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
// -------------------------------
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
// -------------------------------------
// Return the string after removing all the occurence of the given character
function removeAllOccurrences(string, letter) {
    return string.split(letter).join('');
}
const ts = "aircampus";
const LR = 'a';
// console.log(removeAllOccurrences(ts, LR));

function removeCharacter(string, char) {
    // Create a regular expression to match all occurrences of the given character
    const regex = new RegExp(char, 'g');
    return string.replace(regex, '');
}
const takeString = "Javascript";
const charToRemove = 'a';
// console.log(removeCharacter(takeString, charToRemove));

function removeAllOccurrences(string, letter) {
    // Convert both the string and the letter to lowercase (or uppercase)
    string = string.toLowerCase();
    letter = letter.toLowerCase();
    return string.split(letter).join('');
}
const str_input = "JAvascript";
const letterToRemove = 'a';
// console.log(removeAllOccurrences(str_input, letterToRemove));
// -----------------------------------
// return the last four characters of the given string. The string length will always be greater than equal to four.
const inputString = 'javascript';
const lFCharacters = inputString.slice(-4);
// console.log(lFCharacters);

const lastFourCharacter = inputString.substr(-4);
// console.log(lastFourCharacter);

const lastFourCharacters = inputString.substring(inputString.length - 4);
// console.log(lastFourCharacters);
// ----------------------------------------
// count e in given string 
function countE(string) {
    const count = string.split('').filter(char => char === 'e').length;
    return count;
}
var str = 'help';
// console.log(countE(str));
// ----------------------------------------------
// Given a string, add all the characters of the string to an array, excluding whitespaces. Return the character array
var string = "amit yadav"
let a = string.split('').filter(char => char !== ' ');
// console.log(a);

const result = [];
for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
        result.push(string[i]);
    }
}
// console.log(result);
const tring = 'yadav amit'
let aa = tring.replace(/\s/g, '').split('');
// console.log(aa);

const iString = 'java script';
// console.log(removeWhitespace(iString)); 
//--------------------------------------
// removing all the whitespace
var str = 'java script'
let rs = str.split('').filter(char => char.trim() !== '').join('');
// console.log(rs);

// Reveres the given string word by word then return the reversed string
let ab = 'the name is amit'
let rs_wordByword = ab.split(' ').reverse().join(' ');
// let rs_wordByword = ab.split('').reverse().join(''); //tima si eman eht
// console.log(rs_wordByword); // amit is name the
// --------------------------------------
// alphanumeric
// return /^[a-zA-Z0-9]+$/.test(str);
function alphanumeric(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] > 0 && str[i] <= 9) {
        count++;
      }
    }
    if (count > 0) {
      return true;
    }
    else {
      return false;
    }
}
// alphanumeric(); ❌

// ----------------------------------
// Given a string, return the middle character, if the string length is odd, else return the middle two characters.
function middleChar(str) {
    const length = str.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return str.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return str.charAt(middleIndex);
    }
}
// middleChar(); ❌

//----------------------------
// Return true if the email is valid else return false
function validEmail(str) {
    if (str.includes('@') && str.includes('.')) {
        return true;
    } else {
        return false;
    }
}
// console.log(validEmail('amit21nagurukul.org'));
//-------------------------------
// Given a string, return the last 4 characters of the given string.
function lastFour(string) {
    const lastFourCharacters = string.substring(string.length - 4);
    return lastFourCharacters;
}
// console.log(lastFour('amityadav'));

// --------------------------------------
// Given a string, find out how many times ‘e’ is present in the string. Return the count of ‘e.
function counte(string) {
    const count = string.split('').filter(char => char === 'e').length;
    return count;
}
// console.log(counte('help'));

// ------------------------------------
// add all the characters of the string to an array, excluding whitespaces. Return the character array
function charArray(str) {
    let str_array = str.split(' ').join('').split('')
    return str_array;
}
// console.log(charArray('javascript')); // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// Use template literal ?
// ------------------------------
// Given a sentence and a word, add the given word to the end of the string.
function addWordToEnd(sentence, word) {
    return sentence + ' ' + word; // // Using String Concatenation:
    // return `${sentence} ${word}`; //Using Template Literals
    // return [sentence, word].join(' '); // Using String Concatenation in Array and join()
    // return sentence.concat(' ', word); // Using concat() Method
}
// console.log(addWordToEnd('amit','yadav'));

// ------------------------------
//Given a string and two index values, return the string from the start index to end index.
function substring(str, a, b) {
    return str.substring(a, b);
}
// console.log(substring('aircampus', 3, 9));

// ----------------------
//Given a string, remove all the whitespaces and then return the new string.
const r_srting = "  air campus     "
const R_srting = r_srting.split('').filter(char => char.trim() !== '').join('');
// console.log(R_srting);

//  remove all the whitespaces from the start and then return the new string
let s_srting = "  air campus     "
// console.log(s_srting.trimStart());

// replace all the occurrences of Ram with Shyam
var r = str.replace(/Ram/g, "Shyam");
// console.log('Ram owns a dog. Ram likes animals');

// return all the characters of string separated by comma (,)
const comma_str = 'aircampus'
let comma = str.split('').join(',');
// console.log(comma); // a,i,r,c,a,m,p,u,s

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

// capitalize the first letter of each word.
function capitalization(str){
    let arr = str.split(' ');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(' ');
}
// console.log(capitalization('This is a title'));

// return the middle character, if the string length is odd, else return the middle two characters.
function middleChar(str) {
    const length = str.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return str.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return str.charAt(middleIndex);
    }
}
// console.log(middleChar('testing'));