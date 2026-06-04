function rps(user,computer){
    if(user === computer) return "draw";

    if(user === "scissor" && computer === "paper") return "user";
    if(user === "rock" && computer === "scissor") return "user";
    if(user === "paper" && computer === "rock") return "user";

    else return "computer";
}
console.log(rps("scissor","scissor"));