// sum of the first and last element of the array.
function sumFirstLast(arr) {
    return arr[0] + arr[arr.length - 1];
 }
//  console.log(sumFirstLast([1, 2, 3 ,4 ,5 ,6, 7]));

// if the length of the array is greater than 5 return “Hello” else return “World”
function arrayHelloWorld(arr){
    let arrayL = arr.length;
    if (arrayL >=5){
      return 'Hello'
    }
    else{
      return 'World'
    }
}
// console.log(arrayHelloWorld([1, 2, 3 ,4 ,5 ,6,7]));

// Sum First and Last-1
function sumFirstLast(arr){
    return arr[0] + arr[arr.length-1];
}
// console.log(sumFirstLast([1, 2, 3 ,4 ,5 ,6,7]));

// Given a variable arr as function parameter, return “YES” if the given variable arr is an array else return “NO” .
function isArray(arr){
    if (Array.isArray(arr)) {
        return "YES";
    } else {
        return "NO";
    }
}
// console.log(isArray([1,2,3]));

// If element exist in the array return the index else return "Not Found"
function elementIndex(arr, element){
    if (Array.isArray(arr)) {
        const index = arr.indexOf(element);
      if (index !== -1 ){
        return index;
      }
      else{
        return "Not Found";
      }
    } else {
        return "Not Array";
    }
}
// console.log(elementIndex([1,2,3], 3));

function elementIndex(arr, element){
    if (Array.isArray(arr)) {
        const index = arr.indexOf(element);
        return index !== -1 ? index : -1;
    } else {
        return "Not Array";
    }
}
// console.log(elementIndex([1,2,3], 3));


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

// Convert array to string and return the string.
function arrayToString(arr) {
    return arr.join(',');
    // return arr.join('-');

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

function SecondAndSecondLast(arr) {
    arr.sort((a,b)=>a-b);
    console.log(arr);
    const result = `${arr[1]}${arr[arr.length - 2]}`;
    return result;

    // const result = arr[1] + arr[arr.length - 2];
    // return result;

    // var sArray = arr.sort();
    // const result = sArray[1] + sArray[arr.length - 2];
    // return result;
}
const strings = ['2', '5', '10', '7', '5'];
console.log(SecondAndSecondLast(strings));

// Return Present if the student is present in the class else return Not Present
function attendance(studentsInClass, student){
    if (studentsInClass.includes(student)){
      return 'Present';
    } else {
      return 'Not Present';
    }
}
// console.log(attendance([1, 2, 3], 2));