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