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

// return the last four characters of the given string. The string length will always be greater than equal to four.
const inputString = 'javascript';
const lFCharacters = inputString.slice(-4);
// console.log(lFCharacters);

const lastFourCharacter = inputString.substr(-4);
// console.log(lastFourCharacter);

const lastFourCharacters = inputString.substring(inputString.length - 4);
// console.log(lastFourCharacters);
