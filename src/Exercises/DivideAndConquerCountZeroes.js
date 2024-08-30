// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

const countZeroes = (arr) => {
  const findFirstZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let middle;

    while (left <= right) {
      middle = Math.floor((right + left) / 2);

      if (arr[middle] === 0 && (middle === 0 || arr[middle - 1] === 1))
        return middle;

      if (arr[middle] === 1) left = middle + 1;
      else right = middle - 1;
    }

    return -1;
  };

  const firstZeroIndex = findFirstZero(arr);
  if (firstZeroIndex === -1) return 0;

  return arr.length - firstZeroIndex;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
