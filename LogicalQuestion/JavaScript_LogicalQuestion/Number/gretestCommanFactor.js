function greatestCommonFactor(num1, num2) {
  return Math.gcd(num1, num2); // greatest common divisor (GCD)
}
// console.log(greatestCommonFactor(36, 54)); // Output: 18

function greatestCommonFactor(num1, num2) {
  return num2 === 0 ? num1 : greatestCommonFactor(num2, num1 % num2);
}
// console.log(greatestCommonFactor(78, 3)); // Output: 1

function greatestCommonFactor(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return greatestCommonFactor(num2, num1 % num2);
  }
}
// console.log(greatestCommonFactor(7, 3)); // Output: 1
// console.log(greatestCommonFactor(36, 54)); // Output: 18