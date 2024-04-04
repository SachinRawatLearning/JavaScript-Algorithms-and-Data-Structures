//Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (int1, int2) => {
  if (int1.toString().length !== int2.toString().length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let key of int1.toString()) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }

  for (let key of int2.toString()) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  for (let [key, value] of Object.entries(frequencyCounter1)) {
    if (!frequencyCounter2[key]) return false;
    if (frequencyCounter2[key] !== value) return false;
  }
  return true;
};

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false

//Time Complexity -> O(n)
