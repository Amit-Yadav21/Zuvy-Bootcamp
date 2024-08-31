function capitalizeFirstLetter(str) {
    // return str.charAt(0).toUpperCase() + str.slice(1);
    // return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    // return str[0].toUpperCase() + str.slice(1);
    // return str.replace(/^\w/, match => match.toUpperCase());
    const [first, ...rest] = str;
    return `${first.toUpperCase()}${rest.join('')}`;

}
// console.log(capitalizeFirstLetter('his is a title'));

// ------------------------------------- get First Letters
function getFirstLetters(sentence) {
    return sentence.split(' ').map(word => word.charAt(0)); // Using split() and map()
}
// console.log(getFirstLetters('This is a sample sentence'));