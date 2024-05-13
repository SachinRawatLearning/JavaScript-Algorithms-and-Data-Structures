const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let sortedArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
};

console.log(mergeSort([55, 2, 33, 1, 24, 21, 3, 4, 5, 6]));

//Time Complexity-> O(nlog n)
//Space Complexity-> O(nlog n)
