// Get last four characters of a string
// return the last four characters of the given string. The string length will always be greater than equal to four.

const lFCharacters = inputString.slice(-4);
// console.log(lFCharacters);   // "ript"
const lastFourCharacter = inputString.substr(-4);
// console.log(lastFourCharacter);
const lastFourCharacters = inputString.substring(inputString.length - 4);
// console.log(lastFourCharacters);

// ---------------------------- Add two string 
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

// ---------------------------------- Check if a given string is a substring of another string
function isSubstring(sub, str) {
    return str.includes(sub) ? `${sub} is a substring of ${str}` : `${sub} is not a substring of ${str}`;
}
//   console.log(isSubstring("cat", "concatenate")); // Output: cat is a substring of concatenate
 
// ----------------------------------------------
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

// ---------------------------------------------
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

// -----------------------------------
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

// ------------------------------- replace Ram with Shyam
function ramShyam(str){
    // replace the first occurrences of Ram with Shyam
    // return str.replace("Ram", "Shyam")
    
    // Replace all the occurence of Ram with Shyam 
    return str.replace( /Ram/g, "Shyam");
}
// console.log(ramShyam('Ram owns a dog. Ram likes animals'));

// ------------------------------------------------------------
// return all the characters of string separated by comma (,)
function commaSep(str){
    return str.split('').join(','); // j,a,v,a,s,c,r,i,p,t
    // return str.split(' ').join('').split('') // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
    
}
// console.log(commaSep('javascript'));

// ----------------------------Return true if the email is valid else return false
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

// -----------------Return the string after removing all the leading and trailing zeroes
function removeZeroes(str) {
    let num = parseFloat(str);
    return num.toString();
}
console.log(removeZeroes(230.00)); 

// ------------------- Capitalize first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('his is a title')); // "His is a title"

// ................. capitalize the first letter of each word.
function capitalization(str){
    let arr = str.split(' ');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(' ');
}
// console.log(capitalization('This is a title'));

// ----------------------------------------
function alternateSum(arr) {
    const [start, end] = arr;
    let sum = 0;
    for (let i = start; i <= end; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(alternateSum(numbers)); // Output: 9