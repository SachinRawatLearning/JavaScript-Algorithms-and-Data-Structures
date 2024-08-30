// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

const constructNote = (msg, letters) => {
  if (letters.length === 0) return false;

  const msgObj = {};
  const lettersObj = {};

  for (let ele of msg) {
    msgObj[ele] = (msgObj[ele] || 0) + 1;
  }

  for (let ele of letters) {
    if (!lettersObj[ele]) lettersObj[ele] = 1;
    else lettersObj[ele]++;
  }

  for (let [key, value] of Object.entries(msgObj)) {
    if (!lettersObj.hasOwnProperty(key)) return false;
    if (lettersObj[key] < value) return false;
  }

  return true;
};

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
