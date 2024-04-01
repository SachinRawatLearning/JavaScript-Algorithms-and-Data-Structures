// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
//Both string are lower cased and there's no characters aside from alpha-numeric characters

//Sample Test Cases:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const key of str1)
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;

  for (const key of str2)
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;

  for (const [key, value] of Object.entries(frequencyCounter1)) {
    if (!key in frequencyCounter2) return false;
    if (value !== frequencyCounter2[key]) return false;
  }

  return true;
};

console.log(validAnagram("qwerty", "qeywrt")); //true

//Time Complexity - O(n)
