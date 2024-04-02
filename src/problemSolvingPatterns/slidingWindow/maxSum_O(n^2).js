//MaxSubarraySum
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let maxSum = -Infinity;
  for (let i = 0; i + n - 1 < arr.length; i++) {
    let j = i;
    let rep = n;
    let sum = 0;
    while (rep) {
      sum += arr[j];
      j++;
      rep--;
    }
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null

//Time Complexity - O(n^2)
