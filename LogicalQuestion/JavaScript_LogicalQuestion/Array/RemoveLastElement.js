function removeLastElement(arr) {
    arr.pop();
    return arr; // Returns the modified array.

    // return arr.slice(0, -1); // Slices the array from the start to the second-to-last element.
    // return [...arr.slice(0, -1)]; // Uses the spread syntax on a sliced array to create a new array.
    // return arr.filter((_, index) => index !== arr.length - 1); // Filters out the last element by excluding the last index.
    
    // arr.splice(-1, 1); // Removes the last element from the array.
    // return arr; // Returns the modified array.
}
// console.log(removeLastElement([1, 2, 3])); // Output: [1, 2]