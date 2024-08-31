function Anagram(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  return sortedStr1 === sortedStr2
    ? `${str1} and ${str2} are anagrams`
    : `${str1} and ${str2} are not anagrams`;
}
// console.log(Anagram("listen", "silent")); // Output: listen and silent are anagrams
// console.log(Anagram("hello", "world")); // Output: hello and world are not anagrams

// check if they are anagrams or not. If they are anagrams return true else return false.
function anagram(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  if (sortedStr1 === sortedStr2) {
      return true;
  }
  else {
      return false;
  }
}
// console.log(anagram('elbow', 'below'));