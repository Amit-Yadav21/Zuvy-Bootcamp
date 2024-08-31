// Change all the lowercase characters to uppercase and uppercase character to lowercase then return the string.
function upperLower(strings) {
    let result = '';
    for (let char of strings) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
// console.log(upperLower('AirCampus'));