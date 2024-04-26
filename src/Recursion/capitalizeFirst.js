// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

const capitalizeFirst = (arr) => {
  console.log(arr.length);
  if (arr.length === 0) return [];

  let resultArr = [];

  resultArr.push(arr[0][0].toUpperCase().concat(arr[0].slice(1)));

  resultArr = resultArr.concat(capitalizeFirst(arr.slice(1)));
  return resultArr;
};

console.log(capitalizeFirst(["car", "taco", "banana"]));
