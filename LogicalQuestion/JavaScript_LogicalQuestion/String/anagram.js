function areAnagrams(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
    return sortedStr1 === sortedStr2
      ? `${str1} and ${str2} are anagrams`
      : `${str1} and ${str2} are not anagrams`;
  }
  
  console.log(areAnagrams("listen", "silent")); // Output: listen and silent are anagrams
  console.log(areAnagrams("hello", "world")); // Output: hello and world are not anagrams
  