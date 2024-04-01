// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const key of arr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }

  for (const key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  console.log(frequencyCounter1, frequencyCounter2);

  for (const [key, value] of Object.entries(frequencyCounter1)) {
    if (!frequencyCounter2.hasOwnProperty(key ** 2)) return false;
    if (frequencyCounter2[key ** 2] !== value) return false;
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));

//Time Complexity - O(n)
