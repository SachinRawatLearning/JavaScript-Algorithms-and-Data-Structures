//Tabulation

const fib = (n) => {
  if (n <= 2) return 1;

  const table = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
};

console.log(fib(1)); //1
console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3
console.log(fib(5)); //5
console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21
console.log(fib(100)); //354224848179262000000

//Time Complexity -> O(n) but Space Complexity is less than Memoization solution.
