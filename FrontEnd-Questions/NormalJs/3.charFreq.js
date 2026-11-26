const str = "kavita";
const freq = {};
for (const char of str) {
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}
console.log(freq);

// ---------- Object notes ----------

const student = {
  name: "Kavita",
  age: 20,
  city: "Delhi",
};

console.log(student.name); // Kavita
console.log(student["age"]); // 20

student.age = 21;
student.college = "DU";
console.log(student); // { name: 'Kavita', age: 21, city: 'Delhi', college: 'DU' }

const key = "city";
console.log(student[key]); // Delhi
console.log(student.key); // undefined

delete student.college;
console.log(student); // { name: 'Kavita', age: 21, city: 'Delhi' }

console.log("name" in student); // true
console.log(student.phone); // undefined

for (const k in student) {
  console.log(k, student[k]);
}
// name Kavita
// age 21
// city Delhi

console.log(Object.keys(student)); // [ 'name', 'age', 'city' ]
console.log(Object.values(student)); // [ 'Kavita', 21, 'Delhi' ]
console.log(Object.entries(student)); // [ [ 'name', 'Kavita' ], [ 'age', 21 ], [ 'city', 'Delhi' ] ]

const box = {};
box["k"] = 1;
box["a"] = 1;
box["a"]++;
console.log(box); // { k: 1, a: 2 }
