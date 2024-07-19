//Hash Function
const hash = (key, len) => {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const value = key.charCodeAt(i) - 96;
    total = (total * prime + value) % len;
  }
  return total;
};
