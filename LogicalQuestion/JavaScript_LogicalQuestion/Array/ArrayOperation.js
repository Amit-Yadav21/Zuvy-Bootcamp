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

// Return Present if the student is present in the class else return Not Present
function attendance(studentsInClass, student) {
    if (studentsInClass.includes(student)) {
        return 'Present';
    } else {
        return 'Not Present';
    }
}
// console.log(attendance([1, 2, 3], 2));

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