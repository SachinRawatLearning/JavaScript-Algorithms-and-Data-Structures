const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([2, 1, 6, 4, 123, 12, 64]));

//Time Complexity -> O(n^2)
//Best Case -> If the array is almost sorted like [1,2,3,4,-1]
