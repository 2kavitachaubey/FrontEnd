let aboutkavita = [
  "I love turning messy ideas into clean code.",
  "Coffee first, code second ☕",
  "I get way too excited about a good CSS animation.",
  "Night owl — my best code happens after midnight.",
  "I believe every bug has a funny story behind it.",
  "Big fan of dark mode, everywhere, always.",
  "I could scroll through space wallpapers for hours.",
  "Learning something new every single day.",
];

let cursor = document.getElementById("cursor");
let button = document.querySelector("button");
let body = document.querySelector("body");
let main = document.getElementById("main");
body.addEventListener("mousemove", (dets) => {
  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
  cursor.style.transform = "scale(1)";

  let stopIt;
  clearTimeout(stopIt);
  stopIt = setTimeout(() => {
    cursor.style.transform = "scale(0)";
  }, 2000);
});

let idx = 0;

let aboutFunc = () => {
  let fact = document.createElement("h3");
  fact.textContent = aboutkavita[idx % aboutkavita.length];

  let randomX = Math.random() * 80 + 10;
  let randomY = Math.random() * 80 + 10;
  let r = Math.floor(Math.random() * 106) + 150;
  let g = Math.floor(Math.random() * 106) + 150;
  let b = Math.floor(Math.random() * 106) + 150;

  fact.style.left = randomX + "%";
  fact.style.top = randomY + "%";
  fact.style.backgroundColor = `rgb(${r},${g},${b})`;
  fact.style.color = "black";

  main.appendChild(fact);
  idx++;
};

button.addEventListener("click", () => {
    aboutFunc();
});

body.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        aboutFunc();
    }
})
