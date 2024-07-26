function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number && sum !== 0
        ? `${number} is a perfect number`
        : `${number} is not a perfect number`;
}
console.log(isPerfectNumber(28)); // Output: 28 is a perfect number
console.log(isPerfectNumber(12)); // Output: 12 is not a perfect number
