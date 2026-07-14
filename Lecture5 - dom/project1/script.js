let h1 = document.querySelector("h1");
let inc = document.getElementById("inc");
let decre = document.getElementById("decre");

let a = 0;
inc.addEventListener("click",function(){
    a++;
    h1.innerHTML = a;
})
decre.addEventListener("click",function(){
    a--;
    h1.innerHTML = a;
})