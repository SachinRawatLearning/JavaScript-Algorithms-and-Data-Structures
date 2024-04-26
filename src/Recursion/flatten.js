// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatten = (arr) => {
  let flattenArr = [];
  const recursive = (arr) => {
    if (arr.length === 0) return;

    if (!Array.isArray(arr[0])) flattenArr.push(arr[0]);
    else recursive(arr[0]);
    return recursive(arr.slice(1));
  };

  recursive(arr);

  return flattenArr;
};

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
