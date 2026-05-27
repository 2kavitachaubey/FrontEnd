// let prompt = require('prompt-sync')();

// Compound Interest
// let P = prompt("Enter the principal amount: ");
// let r = prompt("Enter the rate of interest: ");
// let t = prompt("Enter the time period: ");
// console.log(`The compound interest is ${(P*Math.pow((1+(r/100)),t)-P).toFixed(2)}`)


// Generate OTP
let otp = Math.trunc((Math.random()*9000)+1000);
console.log(`Your otp is ${otp}`)