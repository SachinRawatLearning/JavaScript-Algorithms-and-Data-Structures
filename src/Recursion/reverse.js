// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = (str) => {
  if (!str.length) return "";

  return str[str.length - 1] + reverse(str.slice(0, -1));
};
//awesome

//e + reverse()

console.log(reverse("rithmschool"));
