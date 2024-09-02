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