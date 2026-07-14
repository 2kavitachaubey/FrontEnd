console.log("Connected!");

// let age = prompt("Enter your age: ");
// if(age === null){
//     console.error("You cancelled it.");
// }else{
//     if(age.trim() === ""){
//         console.error("Enter something in this.")
//     }else{
//         age = Number(age.trim());
//         if(isNaN(age)){
//             console.error("It's not a number.")
//         }else{
//             console.log("It's a number.");
//         }
//     }
// }

// let userPassword = prompt("Enter your password: ");
// let originalPassword = "hello123";
// if(userPassword===originalPassword){
//     console.log("Correct password...");
// }
// else{
//     console.log("Incorrect password");
// }

// let correctPassword = "kavita123";
// for(let i = 1; i<=3; i++){
//     let password = prompt(`Enter Password ${i} attempt: `);
//     if(password === correctPassword){
//         console.log("Access Granted");
//         break;
//     }else{
//         if(i === 3){
//             console.error("Access Denied");
//         }
//     }
// }

// let countYes = 0;
// while(true){
//     let word = prompt("Enter anything: ");
//     if(word.toLowerCase().trim() === "stop"){
//         break;
//     }
//     if(word.toLowerCase().trim() === "yes"){
//         countYes++;
//     }
// }
// console.log(countYes);

// while(true){
//     let num = prompt("Enter any number: ");
//     if(Number(num.trim())%2===0){
//         break;
//     }else{
//         continue;
//     }
// }

// let num1 = Number(prompt("Enter the starting number: "));
// let num2 = Number(prompt("Enter the ending number: "));
// if(num1 > num2){
//     [num1, num2] = [num2, num1];
// }
// while(num1<(num2-1)){
//     console.log(++num1);
// }

// let num = 0;
// for(let i = 1; i<=20; i++){
//     if(num === 3){
//         break;
//     }
//     if(i%3 ===0){
//         console.log(i);
//         num++;
//     }
// }

// let count = 0;
// for (let i = 0; i < 5; i++) {
//   let int = Number(prompt("Enter any number: "));
//   if(int >=0 ){
//     count++;
//   }
// }
// console.log(count);

// let balance = 1000;
// for (let i = 0; i < 3; i++) {
//   let withdraw = Number(prompt("Enter withdrawal amount: "));
//   if (balance >= withdraw) {
//     balance -= withdraw;
//     console.log("Deduct");
//   } else {
//     console.log("Insufficient Balance");
//     break;
//   }
// }
