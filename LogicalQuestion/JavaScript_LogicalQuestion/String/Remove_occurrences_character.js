// Remove all occurrences of a character
function removeCharacter(str, char) {
    return str.split(char).join('');
}
// console.log(removeCharacter("hello world", "o")); // "hell wrld"

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