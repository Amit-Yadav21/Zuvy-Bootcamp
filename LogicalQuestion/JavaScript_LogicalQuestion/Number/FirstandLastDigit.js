function sum(a) {
    var lastDigit = a % 10;
    var firstDigit = Math.floor(a / 10);
    var sumofFL = firstDigit + lastDigit;
    console.log(sumofFL);
}
// sum(15)
