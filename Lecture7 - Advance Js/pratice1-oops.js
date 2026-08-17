// SECTION 1: OOPS Thinking with Objects
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
// Write down (in words or code) what problems you will face if you keep using plain objects.
// we have to make new object for each one, rewrite same kind of code take more space.

console.log("...");

let laptop = {
  brand: "Hp",
  price: 70000,
  start: function () {
    console.log("Laptop started...");
  },
  increPrice: function () {
    console.log(`${this.price + this.price / 10} is your new price now.`);
  },
};

laptop.increPrice();

// ⸻

// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary

// Add a method showDetails that prints name and salary.
// 	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 	6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?
// because in class their is no code duplicacy, can use shared memory, less space required.
console.log("...");
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  show() {
    console.log(this.name + " " + this.salary);
  }
}
let emp = new Employee("Mohan", 40000);
emp.show();

// ⸻

// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.
// because class separate them they have same blueprint but are unique.
// a class separates what is shared from what is unique
console.log("...");
class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    console.log(`New balance ${this.balance + amount}`);
  }
  newFunction(){
    console.log("hello");
  }
}
let account1 = new BankAccount("Ramesh", 30000);
let account2 = new BankAccount("Naraya", 70000);
account2.deposit(40000);


// ⸻

// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// it print undefined
// JavaScript mein this ki value is baat se tay hoti hai ki function ko kaise CALL kiya gaya (Call Site), 
// na ki jahan use likha gaya hai.
// profile.printName(): Function ko profile. ke saath call kiya, isliye this profile ban gaya 
// Output: "Alice"
// loosePrintName(): Function ko bina kisi object ke (akela) call kiya, 
// isliye this bhatak kar Global Window (ya strict mode mein undefined) ban gaya Output: undefined
// 	14.	Modify the code so that this works correctly again.
console.log("...");
let profile = {
  username: "kavita_chaubey",
  printName: function () {
    console.log(this.username);
  },
};
profile.printName();
// let printAgain = profile.printName;// we are giving a reference(address) of this function
// printAgain();
// ⸻

// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// Constructor ke andar method likhne se, jitne bhi objects banenge (car, bike, etc.), 
// sabke paas function ki alag-alag copy jayegi. 
// Isse memory waste hoti hai kyuki same code baar-baar RAM mein save hota hai.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.
console.log("...");
function Vehicle(type, wheels){
    this.type = type;
    this.wheels = wheels;
    this.des= function(){
        console.log(this.type);
    }
}
Vehicle.prototype.describe = function(){
    console.log(`It's a ${this.type} with ${this.wheels} wheels`);
}
let obj1 = new Vehicle("car", 4);
let obj2 = new Vehicle("bike", 2);
let obj3 = new Vehicle("cycle", 2);

console.log(obj1.des===obj2.des); // have separate memory

console.log(obj1.describe===obj2.describe); // have shared memory

// ⸻

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.
// use object as this.

console.log("...");
function showBrand(brand){
    this.brand = brand;
    console.log(this.brand);
}
let brand1;
let brand2;

showBrand.call(brand1, "apple");


// ⸻

// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.
// argument are  passed in array.

console.log("...");
function introduce(city, role){
    this.city = city;
    this.role = role;
    console.log(`City is ${this.city} and role is ${role}`);
}
let city1;
let city2;

introduce.apply(city1, ["jaipur", "developer"]);
// ⸻

// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
//  bind() is useful because it remembers what this should be when the function runs later.

function greet(name){
    this.name = name;
    console.log("Hello " + this.name);
}

let g1;
let bindFunc = greet.bind(g1, "Kavita");
console.log("hihihihiihiihihihihihihih");
bindFunc();