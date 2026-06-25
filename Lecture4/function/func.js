// Type of functions;
console.log("Types of function: ");

// statement function
greet();

function greet(){
    console.log("It's a statement function");
}

//expression function
let expressFunc = function(){
    console.log("It's an expression function");
}
expressFunc();

//fat Arrow function
let arrowFunction = () =>{
    console.log("It's an fat arrow function");
}
arrowFunction();

console.log("\n");


//Function Details
console.log("Function Details");

//Default parameter
let defaultPara = (a=0,b=0) =>{
    console.log(a+b);
}
console.log("Default value for parameter if argument is not given.")
defaultPara();
defaultPara(3,5);

//Rest
let restFunc = (...rest) => {
    console.log(...rest);
}
console.log("Use ... for large arguments (array,object)")
restFunc(4,5,7,7,8,4,3,2,6,8);

//return
function returnValue(a,b){
    return a*b;
}
console.log("Return value to the function.");
console.log(returnValue(3,4));

//First class function
console.log("First class function: function treated as a value.");
function abcd(val){
    val();
}
abcd(function oneMore(){
    console.log("Hello it's first class function.");
})

//Higher order function
console.log("Higher order function: function that return a function or accept function as a parameter.");
function highOrderFunction(val){
    val();
}
highOrderFunction(function val1(){
    console.log("high order function will accept me.")
})

function highOrderFunction1(){
    return function insideFunction(){
        console.log("I'm high order function, function return a funtion.");
    }
}
highOrderFunction1()();

// pure function
let a = 10;
function pureFunction(){
    console.log("Pure function: no changes in value outside of the function.");
}
pureFunction()
console.log("impure: change in value outside of the function.")
//Impure function
function impureFunction(){
    a = a+7;
    return a;
}
console.log(impureFunction());

//closures
console.log("A function return a function and use the value of it's upper function.")
function upperFunc(){
    let a = 4;
    return function lowerFunction(){
        a++;
        console.log(a);
    }
}
upperFunc()();

//lexical scoping 

//Immediately invoked function expression

(function (){
    console.log("hello printed");
})();