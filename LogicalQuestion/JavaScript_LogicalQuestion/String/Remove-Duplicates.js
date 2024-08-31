// Remove duplicates
function removeDuplicates(str) {
    const charMap = {};
    let result = '';
    for (let char of str) {
        if (!charMap[char]) {
            result += char;
            charMap[char] = true;
        }
    }
    return result;
}
console.log(removeDuplicates("hello")); // "helo"