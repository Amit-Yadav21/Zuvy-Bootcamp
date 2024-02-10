// Given an array of strings, sort the array and then return concatinating the 2nd and 2nd last element of the array.
function sortSum(arr) {
    var sArray = arr.sort((a,b)=>a-b);
    console.log(sArray);
    const result = sArray[1] + sArray[arr.length - 2];
    return result;
}
// console.log(sortSum(['2', '5', '10', '7', '5']));

// Given an array and a number, add the number to the end of the array.
function addToEnd(arr, num) {
    arr.push(num);
    return arr;
    // return [...arr, num];
    // return arr.concat(num);
}
// console.log(addToEnd([2, 5, 10, 7, 5], 1));

// removes the first element from an array
function deleteFirstElement(arr) {
    arr.shift();
    return arr;
    // return arr.slice(1);
}
// console.log(deleteFirstElement([1, 2, 3]));

// remove Last Element
function removeLastElement(arr) {
    // arr.pop();
    // return arr;
    return arr.slice(0, -1);
}
// console.log(removeLastElement([1, 2, 3])); // Output: [1, 2]

function arrayToString(arr) {
    return arr.join(',');

    // let result = '';
    // for (let i = 0; i < arr.length; i++) {
    //     result += arr[i];
    //     if (i !== arr.length - 1) {
    //         result += ',';
    //     }
    // }
    // return result;

    // return arr.reduce((acc, curr, index) => {
    //     if (index === 0) {
    //         return curr.toString();
    //     } else {
    //         return acc + ',' + curr.toString();
    //     }
    // }, '');
}
// console.log(arrayToString([1, 2, 3])); // Output: '1,2,3'

function reverseArray(arr) {
    return arr.reverse();

    // const reversedArr = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     reversedArr.push(arr[i]);
    // }
    // return reversedArr;

    // return [...arr].reverse();
}
// console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]

function concatenateSecondAndSecondLast(arr) {
    // arr.sort();
    // const result = `${arr[1]}${arr[arr.length - 2]}`;
    // return result;

    // const result = arr[1] + arr[arr.length - 2];
    // return result;

    // var sArray = arr.sort();
    // const result = sArray[1] + sArray[arr.length - 2];
    // return result;
}
const strings = ['2', '5', '10', '7', '5'];
// console.log(concatenateSecondAndSecondLast(strings));
