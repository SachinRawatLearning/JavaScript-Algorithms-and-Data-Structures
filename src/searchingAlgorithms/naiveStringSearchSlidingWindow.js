//wowomgzomg
//omg

const matchString = (str, match) => {
  if (match.length > str.length) return 0;

  let i = 0;
  let j = 0;
  let counter = 0;

  while (i < str.length) {
    if (str[i] === match[j]) j++;
    else j = 0;
    if (j === match.length) {
      counter++;
      j = 0;
    }

    i++;
  }
  console.log(counter); // 2
};

matchString("wowomgzomg", "omg");
