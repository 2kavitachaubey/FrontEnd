let details = [
  {
    name: "Alice",
    about: "loves painting landscapes",
  },
  {
    name: "Bob",
    about: "enjoys hiking on weekends",
  },
  {
    name: "Charlie",
    about: "plays guitar in a local band",
  },
  {
    name: "Diana",
    about: "into photography and travel",
  },
  {
    name: "Ethan",
    about: "builds robots as a hobby",
  },
  {
    name: "Fiona",
    about: "runs a small baking blog",
  },
];

let clutter = "";
let box = document.querySelector(".box");

details.forEach((elem, idx) => {
  clutter += `<div class="card">
        <h1>${elem.name}</h1>
        <p>${elem.about}</p>
      </div>`;
});
box.innerHTML = clutter;

addEventListener("mousemove",(e)=>{
    document.body.style.setProperty("--x",e.clientX + "px");
    document.body.style.setProperty("--y",e.clientY + "px");
})