// removes the first element from an array
function deleteFirstElement(arr) {
    arr.shift();
    return arr; // Returns the modified array.
    
    // return arr.slice(1); // Creates a new array excluding the first element.
    // return [...arr.slice(1)]; // Uses spread syntax to create a new array from a sliced array starting from index 1.
    // return arr.filter((_, index) => index !== 0); // Filters out the first element (index 0).

    // arr.splice(0, 1); // Removes the first element from the array.
    // return arr; // Returns the modified array.
}
// console.log(deleteFirstElement([1, 2, 3]));