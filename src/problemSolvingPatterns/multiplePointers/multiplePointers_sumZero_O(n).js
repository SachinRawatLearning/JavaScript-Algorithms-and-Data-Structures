// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

const sumZero = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  //Take two pointer, one from start and one from end
  let left = 0;
  let right = arr.length - 1;

  while (arr[right] > arr[left]) {
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];
    //If arr[left]< arr[right], that means left should be increased as in sorted array, we will have greater number to the right
    else if (arr[left] + arr[right] < 0) left++;
    else right--;
  }
};
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumZero([-2, 0, 1, 3])); //undefined
console.log(sumZero([1, 2, 3])); //undefined
console.log(sumZero("sam")); //undefined
console.log(sumZero([])); //undefined

//Time Complexity - O(n)
//Space Complexity - O(1)
