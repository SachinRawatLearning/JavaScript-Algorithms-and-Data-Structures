//Bubble Sort
//[2,35,64,43,22,53,1]

const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    //If there are no swaps, that means the array is already sorted.
    if (noSwap === true) break;
  }

  return arr;
};

console.log(bubbleSort([2, 35, 64, 43, 22, 53, 1]));

//Time Complexity: O(n^2)
