const reversed = (str) => {
  let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
  return str1;
};

const reversed1 = (str) => {
  return str.split("").reverse().join("");
};

const str = "Hello World";
console.log(reversed(str));
console.log(reversed1(str));
