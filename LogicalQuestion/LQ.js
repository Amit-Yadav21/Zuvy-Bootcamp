

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




// ----------------------------------------------

//--------------------------------------




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
// console.log(middleChar('testing'));
//................................................
function getFirstLetters(sentence) {
    return sentence.split(' ').map(word => word.charAt(0)); // Using split() and map()

    // Using split() and forEach()
    const words = sentence.split(' ');
    const firstLetters = [];
    words.forEach(word => {
        firstLetters.push(word.charAt(0));
    });
    // return firstLetters;  

    //// Using Regular Expressions and match()
    const matches = sentence.match(/\b\w/g);
    // return matches ? matches.map(match => match.toUpperCase()) : []; 

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