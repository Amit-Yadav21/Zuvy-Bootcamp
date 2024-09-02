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