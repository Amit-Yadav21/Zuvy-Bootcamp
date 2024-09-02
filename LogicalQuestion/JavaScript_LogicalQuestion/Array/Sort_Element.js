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