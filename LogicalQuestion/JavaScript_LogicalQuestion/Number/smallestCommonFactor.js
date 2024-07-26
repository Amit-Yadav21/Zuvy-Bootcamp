function smallestCommonDivisor(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1 === 0 ? "No common divisor found" : num1;
}
// console.log(smallestCommonDivisor(12, 16)); // Output: 4
// console.log(smallestCommonDivisor(15, 25)); // Output: 5
// console.log(smallestCommonDivisor(7, 13)); // Output: 1 (no common divisor other than 1)

function smallestCommonFactor(num1, num2) {
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            return i;
        }
    }
    return "No common factor found";
}
// console.log(smallestCommonFactor(12, 16)); // Output: 2
// console.log(smallestCommonFactor(15, 25)); // Output: "No common factor found"
// console.log(smallestCommonFactor(7, 13)); // Output: "No common factor found"