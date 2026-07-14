let prompt = require('prompt-sync')()
let amount = prompt("Enter your amount: ");

if(amount<= 5000){
    console.log(`Total bill amount is ${amount}`);
} else if(amount>= 5001 && amount<=7000){
    console.log(`Your bill amount after 5% discount is ${(amount - ((amount*5)/100))})`)
}else if(amount>= 7001 && amount<=9000){
    console.log(`Your bill amount after 10% discount is ${(amount - ((amount*10)/100))})`)
}else if(amount> 9000){
    console.log(`Your bill amount after 20% discount is ${(amount - ((amount*20)/100))})`)
}else{
    console.log(`Please first buy something`);
}