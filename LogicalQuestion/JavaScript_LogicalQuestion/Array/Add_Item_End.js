// Given an array and a number, add the number to the end of the array.
function addToEnd(arr, num) {
    arr.push(num);  
    return arr;
    // return [...arr, num];
    // return arr.concat(num);
}
// console.log(addToEnd([2, 5, 10, 7, 5], 1));

// -------------------------------------------------------- add element in end ?
const phal = ["Banana", "Orange", "Apple", "Mango"];
phal[phal.length] = "Kiwi";
// console.log(phal);

// --------------------- OR

const myArray = ["Emil", "Tobias", "Linus"];
const myChildren = myArray.concat("Peter");
// console.log(myChildren);