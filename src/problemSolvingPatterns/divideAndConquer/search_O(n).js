// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

const search = (arr, n) => {
  for (let [key, value] of arr.entries()) {
    if (value === n) return key;
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); //3
console.log(search([1, 2, 3, 4, 5, 6], 6)); //5
console.log(search([1, 2, 3, 4, 5, 6], 11)); //-1

//Time Complexity - O(n)