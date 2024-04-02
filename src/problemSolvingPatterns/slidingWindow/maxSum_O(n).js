//MaxSubarraySum
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  //First take sum of first n numbers in array
  for (let i = 0; i < n; i++) maxSum += arr[i];
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    //Add the sum to the next element of array and subtract the prev sum first element
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null

//Time Complexity - O(n)
