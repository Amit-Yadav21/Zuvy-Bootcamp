// sum of the first and last element of the array.
function sumFirstLast(arr) {
    return arr[0] + arr[arr.length - 1];
}
//  console.log(sumFirstLast([1, 2, 3 ,4 ,5 ,6, 7]));

// Given an array of strings, sort the array and then return concatinating the 2nd and 2nd last element of the array.
function sortSum(arr) {
    var sArray = arr.sort((a, b) => a - b);
    console.log(sArray);
    const result = sArray[1] + sArray[sArray.length - 2];
    return result;
}
// console.log(sortSum(['2', '5', '10', '7', '5']));

function SecondAndSecondLast(arr) {
    arr.sort((a, b) => a - b);
    const result = `${arr[1]}${arr[arr.length - 2]}`;
    return result;

    // const result = arr[1] + arr[arr.length - 2];
    // return result;

    // var sArray = arr.sort();
    // const result = sArray[1] + sArray[arr.length - 2];
    // return result;
}
const strings = ['2', '5', '10', '7', '5'];
// console.log(SecondAndSecondLast(strings));

// if the length of the array is greater than 5 return “Hello” else return “World”
function arrayHelloWorld(arr) {
    let arrayL = arr.length;
    if (arrayL >= 5) {
        return 'Hello'
    }
    else {
        return 'World'
    }
}
// console.log(arrayHelloWorld([1, 2, 3 ,4 ,5 ,6,7]));


// Given a variable arr as function parameter, return “YES” if the given variable arr is an array else return “NO” .
function isArray(arr) {
    if (Array.isArray(arr)) {
        return "YES";
    } else {
        return "NO";
    }
}
// console.log(isArray([1,2,3]));

// If element exist in the array return the index else return "Not Found"
function elementIndex(arr, element) {
    if (Array.isArray(arr)) {
        const index = arr.indexOf(element);
        if (index !== -1) {
            return index;
        }
        else {
            return "Not Found";
        }
    } else {
        return "Not Array";
    }
}
// console.log(elementIndex([1,2,3], 3));

function elementIndex(arr, element) {
    if (Array.isArray(arr)) {
        const index = arr.indexOf(element);
        return index !== -1 ? index : -1;
    } else {
        return "Not Array";
    }
}
// console.log(elementIndex([1,2,3], 3));

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
    // return arr.reverse();

    // return [...arr].reverse();

    // const reversedArr = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     reversedArr.push(arr[i]);
    // }
    // return reversedArr;

}
// console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]


// Return Present if the student is present in the class else return Not Present
function attendance(studentsInClass, student) {
    if (studentsInClass.includes(student)) {
        return 'Present';
    } else {
        return 'Not Present';
    }
}
// console.log(attendance([1, 2, 3], 2));

// ..................................................... Sort and Replace ?
function sortArray(arr) {
    // Replace 'd' with 'b'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'd') {
            arr[i] = 'b';
        }
    }
    return arr.sort((a, b) => a.localeCompare(b));
}
// console.log(sortArray(['c', 'a', 'd'])); // Output: ['a', 'b', 'c']

function sortArray(arr) {
    // Replace 'd' with 'b' in the array
    arr = arr.map(char => char === 'd' ? 'b' : char);
    // Sort the modified array
    return arr.sort();
}
// console.log(sortArray(['c', 'a', 'd'])); // Output: ['a', 'b', 'c']
// ........................................................................
// If arr.length < 5 - Copy the 3rd element to 2nd and then return the updated array
// If arr.length >= 5 - Copy all the elements from 3rd element to the end of array to 2-nd element.
function copyElement(arr) {
    if (arr.length < 5) {
        arr[1] = arr[2];
    } else {
        arr.splice(1, arr.length - 2, ...arr.slice(2));
    }
    return arr;
}
// console.log(copyElement([1, 2, 3]));    // [1, 3, 3]

// Given a array containing both strings and numbers, remove all the numbers and concat all the strings.
// Return the resulting string
function createString(arr) {
    const strings = arr.filter(item => typeof item === 'string').join(' ');
    return strings;
}

// Example usage:
const input = ['Hello', 'World', 123];
// console.log(createString(input)); // Output: Hello World

// ..........................find Max value of notes 
function getGoodNotes(arrObj) {
    const goodNotes = [];
    arrObj.forEach(student => {
        const highestNote = Math.max(...student.notes);
        goodNotes.push({ name: student.name, goodNote: highestNote });
    });
    return goodNotes;
}
const arrObj = [
    { name: "Bob", notes: [3, 5, 4] },
    { name: "Rary", notes: [1, 4, 6] },
    { name: "Jack", notes: [1, 2, 3] }
];
// console.log(getGoodNotes(arrObj)); // Output: [ { name: 'Bob', goodNote: 5 } ]

// ..............move all the zeroes present in the array to the end, without changing the order of other elements.
function moveToEnd(arr) {
    const zeros = [];
    const nonZeros = [];
    arr.forEach(num => {
        if (num === 0) {
            zeros.push(num);
        } else {
            nonZeros.push(num);
        }
    });
    return nonZeros.concat(zeros);
}
const arrs = [1, 2, 0, 0, 4, 0, 5];
// console.log(moveToEnd(arrs)); // Output: [1, 2, 4, 5, 0, 0, 0]

function moveToEnd(arr) {
    const nonZero = arr.filter(item => item !== 0);
    const zeros = arr.filter(item => item === 0);
    return nonZero.concat(zeros);
}
const Arr = [1, 2, 0, 0, 4, 0, 5];
// console.log(moveToEnd(Arr)); // Output: [1, 2, 4, 5, 0, 0, 0]

// =================================================== practice Question 
let ar = [1,2,3,4,5,6,7,8,9,10];
let remove=ar.splice(4,ar.length -4);
// console.log(remove); // [ 5, 6, 7, 8, 9, 10 ]

const array = [1,2,3,4,5,6];
let c= array.find((num)=>num%2==0);
// console.log(c);

const count = array.filter(num => num % 2 === 0).length;
// console.log(count); // Output: 3

// ........................ sum of Array elements
function sumOfArrayItem(a,b, ...rest){
    // console.log({a,b, rest});
    let result = a + b;
    result = rest.reduce((sum, item) =>{
        return sum+item;
    },result)
    return result;
}
let arr = [1,2,3,4,5,6,7,8,9]
let result = sumOfArrayItem(...arr)
// console.log(result);

// ................................................... slice method
let my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Slice from the 4th element from the end to the 2nd element from the end
let sliced_list = my_list.slice(-4, -1);
// console.log(sliced_list); // Output: [7, 8, 9]

// Slice from the 3rd element from the end to the end of the list
sliced_list = my_list.slice(-3);
// console.log(sliced_list); // Output: [8, 9, 10]

// Slice from the beginning of the list to the 5th element from the end
sliced_list = my_list.slice(0, -5);
// console.log(sliced_list); // Output: [1, 2, 3, 4, 5]

// Slice from the 5th element from the end to the 2nd element from the end, skipping every other element
sliced_list = my_list.slice(-5, -1).filter((_, index) => index % 2 === 0);
// console.log(sliced_list); // Output: [6, 8]

// Slice from the end of the list to the beginning, reversing the list
let reversed_list = my_list.slice().reverse();
// console.log(reversed_list); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ....................................................... splice method
let fruits = ['apple', 'banana', 'cherry', 'date'];
// Remove one element at index 2
let removedItem = fruits.splice(2, 1);
// console.log('Array after removing one element:', fruits); // Output: ['apple', 'banana', 'date']
// console.log('Removed element:', removedItem); // Output: ['cherry']

let colors = ['red', 'green', 'blue'];
// Replace one element at index 1
colors.splice(1, 1, 'yellow');
// console.log('Array after replacing one element:', colors); // Output: ['red', 'yellow', 'blue']

let animals = ['cat', 'dog', 'elephant'];
// Insert two elements starting from index 1
animals.splice(1, 0, 'bird', 'fish');
// console.log('Array after adding elements:', animals); // Output: ['cat', 'bird', 'fish', 'dog', 'elephant']

let languages = ['JavaScript', 'Python', 'Java', 'C++'];
// Remove all elements starting from index 0
languages.splice(0);
// console.log('Array after removing all elements:', languages); // Output: []

let numbers = [1, 2, 3, 4, 5];
// Remove three elements starting from index 1
let removedItems = numbers.splice(1, 3);
// console.log('Array after removing three elements:', numbers); // Output: [1, 5]
// console.log('Removed elements:', removedItems); // Output: [2, 3, 4]
