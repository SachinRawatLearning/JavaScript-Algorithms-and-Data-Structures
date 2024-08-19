//One example of both Optimal Substructure and Overlapping Subproblems is Fibonacci Sequence

//Plain Recursion
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(1)); //1
console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3
console.log(fib(5)); //5
console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21

//Time Complexity -> O(2^n) // Graph increases drastically with every next number in fibonacci sequence
//This is because we are repeating the calculations.