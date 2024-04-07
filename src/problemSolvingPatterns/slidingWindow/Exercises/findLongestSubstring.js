// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)
const findLongestSubstring = (str) => {
  if (!str.length) return 0;

  let longest = 0;
  let start = 0;
  let seenObj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seenObj[char]) {
      start = Math.max(start, seenObj[char]);
    }
    longest = Math.max(longest, i - start + 1);

    seenObj[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring("rithmschool"));//7
console.log(findLongestSubstring("thisisawesome"));//6
console.log(findLongestSubstring("thecatinthehat"));//7
