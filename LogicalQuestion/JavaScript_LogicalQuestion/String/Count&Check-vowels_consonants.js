var stri = "amit yadav"
let vow = 0
let conso = 0
let vowels_ = ['a', 'e', 'i', 'o', 'u']
for (i of stri.toLowerCase()) {
    if (vowels_.includes(i)) {
        vow++
    }
    else {
        conso++
    }
}
// console.log(`vowels here : ${vow}\nconsonents : ${conso}`);

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
// console.log(vowels('vowels are'));

// Count vowels and consonants
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.trim() && !vowels.includes(char)) {
            consonantCount++;
        }
    }
    return `vowels are: ${vowelCount}\nconsonants are: ${consonantCount}`;
}
// console.log(countVowels("Hello World amit"));

// ================================= Check vowel OR consonent ?
const data = 't'
if (data == 'a' || data == 'e' || data == 'i' || data == 'o' || data == 'u') {
    // console.log('vowels');
}
else {
    // console.log('consonents');
}