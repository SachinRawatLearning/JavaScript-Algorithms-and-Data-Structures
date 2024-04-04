// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

//Binary Search
//Array is sorted, so we will take one middle element, and compare it with others, if the number we want to find is greater than middle number, than we can ignore all the lesser elements
//We cam repeat same process with the remaining elements(take middle, compare and ignore )

const search = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;

  while (max >= min) {
    let middle = Math.floor((min + max) / 2);
    console.log(middle);
    if (arr[middle] === n) return middle;
    else if (arr[middle] < n) {
      min = middle + 1;
      console.log(min);
    } else if (arr[middle] > n) {
      max = middle - 1;
      console.log(middle);
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7], 7));
console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
