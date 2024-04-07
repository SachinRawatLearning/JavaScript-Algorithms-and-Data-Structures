// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  if (!arr.length) return 1;

  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([3, 4, 2, 1, 3])); //72
