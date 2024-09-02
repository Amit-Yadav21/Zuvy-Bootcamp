// Sorts an array numerically and concatenates the 2nd and 2nd last elements.
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