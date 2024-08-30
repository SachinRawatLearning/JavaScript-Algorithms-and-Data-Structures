// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

const sortedFrequency = (arr, num) => {
  let middle;

  const findFirst = () => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      middle = Math.floor((right + left) / 2);

      if (arr[middle] === num && (arr[middle - 1] !== num || middle === 0))
        return middle;

      if (arr[middle] >= num) right = middle - 1;
      else left = middle + 1;
    }

    return -1;
  };

  const findLast = () => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      middle = Math.floor((left + right) / 2);

      if (arr[middle] === num && arr[middle + 1] !== num) return middle;

      if (arr[middle] <= num) left = middle + 1;
      else right = middle - 1;
    }
    return -1;
  };

  const first = findFirst();
  const last = findLast();
  if (first === -1 || last === -1) return -1;

  return last - first + 1;
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); //4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
