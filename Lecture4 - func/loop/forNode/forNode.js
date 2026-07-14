let prompt = require('prompt-sync')();

function rps(user,computer){
    if(user === computer) return "draw";

    if(user === "scissor" && computer === "paper") return "user";
    if(user === "rock" && computer === "scissor") return "user";
    if(user === "paper" && computer === "rock") return "user";

    else return "computer";
}
console.log(rps("scissor","scissor") + "\n");

let value = prompt("Enter a number : ");
if(Number(value) % 2===0){
    console.log(`${value} is even`);
}else{
    console.log(`${value} is odd`);
}
