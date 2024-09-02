function reverseArray(arr) {
    return arr.reverse();
    // return [...arr].reverse();
    // return arr.reduce((acc, curr) => [curr, ...acc], []); // Adds each element to the front of the accumulator array.

    // const reversedArr = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     reversedArr.push(arr[i]);
    // }
    // return reversedArr;

}
// console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]