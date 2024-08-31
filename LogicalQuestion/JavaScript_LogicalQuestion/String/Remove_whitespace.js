function removeWhitespace(string) {
    return string.split(' ').join('');
    
    // return string.split('').filter(char => char !== ' ').join('');

    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            result += string[i];
        }
    }
    // return result;

    // removing all the whitespace from the start/end of the string
    // return string.trimStart();
    // return str.trimEnd();

}
// console.log(removeWhitespace('    java script     '));