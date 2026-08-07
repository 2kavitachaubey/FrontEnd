let h1 = document.querySelector("h1");
h1.innerHTML = h1.innerHTML.toUpperCase();
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text = h1.innerHTML;

let iteration = 0;

function randomChar(){
    const str = text.split("").map((char, idx) => {
        console.log(idx, iteration);
        if(idx < iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * 26)];
      })
      .join("");
    h1.innerHTML = str;
    iteration += 0.5;
}

h1.addEventListener("mouseenter", () => {
  setInterval(randomChar,30);
});
