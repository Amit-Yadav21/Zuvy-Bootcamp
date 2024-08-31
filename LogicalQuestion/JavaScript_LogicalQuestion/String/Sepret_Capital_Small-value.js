// ============================= Using toLocaleUpperCase() 
let inputString = 'abcRTY';
let capitalLetters = '';
let smallLetters = '';

for (let char of inputString) {
    if (char.toLocaleUpperCase() === char) {
        capitalLetters += char;
    } else {
        smallLetters += char;
    }
}

// console.log(`All capital letters here: ${capitalLetters}`);
// console.log(`All small letters here: ${smallLetters}`);

// ================================================ Using charCodeAt() 
const sr = 'AmiT'
let capital = ''
let small = ''
for (let l of sr) {
    if (l.charCodeAt() >= 64 && l.charCodeAt() < 92) {
        capital = capital + l
    } else {
        small = small + l
    }
}
// console.log(`Capital letters: ${capital}`);
// console.log(`Small letters: ${small}`);