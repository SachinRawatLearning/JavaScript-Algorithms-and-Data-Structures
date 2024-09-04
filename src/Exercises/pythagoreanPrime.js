const isPrime = (n) => {
  if (n <= 1) return false;

  if (n === 2 || n === 3) return true;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

const pythagoreanPrime = (n) => {
  const isPrimeNumber = isPrime(n);

  if (isPrimeNumber && n % 4 === 1) return true;
  return false;
};

console.log(pythagoreanPrime(13)); //true
console.log(pythagoreanPrime(15)); //false
console.log(pythagoreanPrime(5)); //true
