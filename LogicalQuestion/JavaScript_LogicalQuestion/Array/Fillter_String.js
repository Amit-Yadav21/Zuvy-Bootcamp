// Given a array containing both strings and numbers, remove all the numbers and concat all the strings.
function createString(arr) {
    const strings = arr.filter(item => typeof item === 'string').join(' ');
    return strings;
}

// Example usage:
const input = ['Hello', 'World', 123];
// console.log(createString(input)); // Output: Hello World