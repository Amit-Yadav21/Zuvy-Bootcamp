function countEvenDigits(number) {
    let num = Math.abs(number);
    let evenCount = 0;
    while (num > 0) {
        // Get the last digit
        let digit = num % 10;
        // Check if the digit is even
        if (digit % 2 === 0) {
            evenCount++;
        }
        // Remove the last digit
        num = Math.floor(num / 10);
    }
    return evenCount;
}
let result1 = countEvenDigits(121);
// console.log(result1);  // Output: 1

function number_of_even_digits(num){
    // write your code here
    let numString = Math.abs(num).toString();
    let evenCount = 0;
    for (let i = 0; i < numString.length; i++) {
        if (parseInt(numString[i]) % 2 === 0) {
            evenCount++;
        }
    }
    // return the answer
    return evenCount;
  }
  let ans = number_of_even_digits(34567);
//   console.log(ans);