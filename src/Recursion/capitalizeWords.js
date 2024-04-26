// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const capitalizeWords = (arr) => {
  if (!arr.length) return [];

  let capArr = [];
  capArr.push(arr[0].toUpperCase());
  capArr = capArr.concat(capitalizeWords(arr.slice(1)));

  return capArr;
};

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
