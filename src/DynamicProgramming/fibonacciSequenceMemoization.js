const fib = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const result = fib(n - 1) + fib(n - 2);
  memo[n] = result;
  return result;
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
