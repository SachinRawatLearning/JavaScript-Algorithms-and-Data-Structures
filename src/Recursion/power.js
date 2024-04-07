// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

const power = (base, pow) => {
  if (pow <= 0) return 1;

  return base * power(base, pow - 1);
};

console.log(power(2, 3)); //8
