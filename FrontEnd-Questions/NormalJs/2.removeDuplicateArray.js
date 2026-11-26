const removeDuplicate = (arr) => {
  const unique = [];
  for (const num of arr) {
    let isDuplicate = false;
    for (const item of unique) {
      if (item === num) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique[unique.length] = num;
    }
  }
  return unique;
};

const removeDuplicate1 = (arr) => {
  const unique = [];
  for (const num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
};

const removeDuplicate2 = (arr) => {
  const unique = [...new Set(arr)];
  return unique;
};

const arr = [2, 4, 5, 2, 5, 3];
console.log(removeDuplicate(arr));
console.log(removeDuplicate1(arr));
console.log(removeDuplicate2(arr));
