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
// vowels();

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
// upperLower('AirCampus');
// upperLower('JavaScript');

// Return the string after removing all the occurence of the given character
function removeAllOccurrences(string, letter) {
    return string.split(letter).join('');
}
// const inputString = "aircampus";
// const letterToRemove = 'a';
// console.log(removeAllOccurrences(inputString, letterToRemove));

function removeCharacter(string, char) {
    // Create a regular expression to match all occurrences of the given character
    const regex = new RegExp(char, 'g');
    return string.replace(regex, '');
}
// const inputString = "Javascript";
const charToRemove = 'a';
// console.log(removeCharacter(inputString, charToRemove));

function removeAllOccurrences(string, letter) {
    // Convert both the string and the letter to lowercase (or uppercase)
    string = string.toLowerCase();
    letter = letter.toLowerCase();
    return string.split(letter).join('');
}
// const inputString = "JAvascript";
const letterToRemove = 'a';
// console.log(removeAllOccurrences(inputString, letterToRemove));
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
let a =  string.split('').filter(char => char !== ' ');
// console.log(a);

const result = [];
for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
        result.push(string[i]);
    }
}
// console.log(result);
const tring = 'yadav amit'
let aa  = tring.replace(/\s/g, '').split('');
// console.log(aa);

const iString = 'java script';
// console.log(removeWhitespace(iString)); 
//--------------------------------------
// removing all the whitespace
var str ='java script'
let rs = str.split('').filter(char => char.trim() !== '').join('');
// console.log(rs);

// Reveres the given string word by word then return the reversed string
let ab = 'the name is amit'
let rs_wordByword = ab.split(' ').reverse().join(' ');
// console.log(rs_wordByword);