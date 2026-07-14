// // Type of functions;
// console.log("Types of function: ");

// // statement function
// greet();

// function greet(){
//     console.log("It's a statement function");
// }

// //expression function
// let expressFunc = function(){
//     console.log("It's an expression function");
// }
// expressFunc();

// //fat Arrow function
// let arrowFunction = () =>{
//     console.log("It's an fat arrow function");
// }
// arrowFunction();

// console.log("\n");


// //Function Details
// console.log("Function Details");

// //Default parameter
// let defaultPara = (a=0,b=0) =>{
//     console.log(a+b);
// }
// console.log("Default value for parameter if argument is not given.")
// defaultPara();
// defaultPara(3,5);

// //Rest
// let restFunc = (...rest) => {
//     console.log(...rest);
// }
// console.log("Use ... for large arguments (array,object)")
// restFunc(4,5,7,7,8,4,3,2,6,8);

// //return
// function returnValue(a,b){
//     return a*b;
// }
// console.log("Return value to the function.");
// console.log(returnValue(3,4));

// //First class function
// console.log("First class function: function treated as a value.");
// function abcd(val){
//     val();
// }
// abcd(function oneMore(){
//     console.log("Hello it's first class function.");
// })

// //Higher order function
// console.log("Higher order function: function that return a function or accept function as a parameter.");
// function highOrderFunction(val){
//     val();
// }
// highOrderFunction(function val1(){
//     console.log("high order function will accept me.")
// })

// function highOrderFunction1(){
//     return function insideFunction(){
//         console.log("I'm high order function, function return a funtion.");
//     }
// }
// highOrderFunction1()();

// // pure function
// let a = 10;
// function pureFunction(){
//     console.log("Pure function: no changes in value outside of the function.");
// }
// pureFunction()
// console.log("impure: change in value outside of the function.")
// //Impure function
// function impureFunction(){
//     a = a+7;
//     return a;
// }
// console.log(impureFunction());

// //closures
// console.log("A function return a function and use the value of it's upper function.")
// function upperFunc(){
//     let a = 4;
//     return function lowerFunction(){
//         a++;
//         console.log(a);
//     }
// }
// upperFunc()();

// //lexical scoping 

// //Immediately invoked function expression

// (function (){
//     console.log("hello printed");
// })();


// learning new things
// function doSomething(){
//     console.log(arguments);
//     console.log(arguments[1]);
// }
// doSomething("harsh",27,"harsh@gmail.com");


// bmi calculator
// function bmi(weight, height){
//     return weight/(height*height);
// }
// console.log(bmi(48,1.61544).toFixed(2));


//Reusable discount
// function reusableDiscount(discount){
//     return function(price){
//        return price - (price*discount/100);
//     }
// }
// console.log(reusableDiscount(10)(500));
// let twenty = reusableDiscount(20);
// console.log(twenty(200));


// counter Function
// function counterFunc(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let counter = counterFunc();
// console.log(counter());
// console.log(counter());
// console.log(counter());


//pure function
// function pureFunc(someValue){
//     let moreValue = 5;
//     moreValue += someValue;
//     return moreValue;
// }
// console.log(pureFunc(7));


//iife
// (function (){
//     console.log("hello hii 😒");
// })();


// function objfunc({name,age}){
//     console.log(name,age);
// }
// objfunc({name: "kavita",age:23}); 



// question
//1
// function sayHello(){
//     console.log("Hello JavaScript");
// }
// sayHello();

//2
// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5));

//3
// function invite(name="Guest"){
//     console.log(`Hi ${name}`);
// }
// invite();

//4
// function addUnlimited(...rest){
//     let sum = 0;
//     rest.forEach((val)=>{
//         sum += val;
//     })
//     console.log(sum);
// }
// addUnlimited(1,2,3,4,4,2,2,1,1,3,45,2,1,2);

//5
// (function (){
//     console.log("I run instantly!");
// })();

//6
// function outer(){
//     let val = 50;
//     return function(){
//         val += 5;
//         return val;
//     }
// }
// let outerfun = outer();
// console.log(outerfun());

// function outer(){
//     val = 51;
//     function inner(){
//         console.log(val+7);
//     }
//     inner();
// }
// outer();

//7
// let array =["apple","mango","banana","strawberry","guava"];
// console.log(array);
// array.shift()
// console.log(array);
// array.pop();
// console.log(array);

//8
// array.forEach((val)=>{
//     console.log(val);
// })

//9
// let obj = {
//     name: "kavita",
//     age : 23,
//     city :"haldwani",
// };
// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }

// setTimeout(function(){
//     console.log("Time Out");
// },2000); // 2000 in ms


//question

//1
// function pureFunction(a,b ){
//     console.log(a+b);
// }
// pureFunction(3,4);

// let num = 30;
// function impure(a){
//     num++;
//     console.log(num + a);
// }
// impure(4);

//2 object destructuring inside parameters to extract and print name and age.
// function abcd({name,age}){
//     console.log(name,age);
// }
// abcd({name: "kavita", age: 23});

//3 
let arr = [ 1,2,3,4,4];
let newarr = arr.map((val)=>{
    return val*val;
})
console.log(newarr);

let fil = arr.filter((val)=>{
    return val % 2===0;
})
console.log(fil);

let salary = [2000,39993,29292];
let red = salary.reduce((acc, val)=>{
    return acc+val;
},0)
console.log(red);

let names = ["kavita","jai","ved","abhinav"];
let testSome = names.some((val)=>{
    return val.length > 3;
})
console.log(testSome);
let testEvery = names.every((val)=>{
    return val.length > 3;
})
console.log(testEvery);


// seal : change change value but can't add any values.
// freeze : no changes in the object after freeze and not add new values.
let user = {
    name: "Kavita",
    age: 23,
    email: "chaubeykavita750@gmail.com"
}
// Object.freeze(user);
Object.seal(user);
user.name = "avita";
user.city = "haldwani";
console.log(user);


let employee = {
    address: {
        city: "Haldwani",
    }
}
console.log(employee.address.city);
let {city} = employee.address;// bahar nikal liya city ko object se;
console.log(city);