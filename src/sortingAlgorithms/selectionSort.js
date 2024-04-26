//Selection Sort
//[23,5,45,66,13,50,2]

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
};

console.log(selectionSort([23, 5, 45, 66, 13, 50, 2]));
console.log(selectionSort([23, 5, 45, 66, 13, 50, 2, 2, 3, 3]));

//Time Complexity-> O(n^2)
