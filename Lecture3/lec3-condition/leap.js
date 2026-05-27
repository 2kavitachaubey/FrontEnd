let prompt = require('prompt-sync')();
let year = prompt("Enter Year: ");

if(year%400 == 0 || (year%4==0 && year%100 != 0)){
    console.log("It's a leap year");
}
else{
    console.log("It's not a leap year");
}