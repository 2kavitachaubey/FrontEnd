let arr = [
  {
    dp: "https://picsum.photos/80/80?random=1",
    story: "https://picsum.photos/80/80?random=11",
  },
  {
    dp: "https://picsum.photos/80/80?random=2",
    story: "https://picsum.photos/80/80?random=12",
  },
  {
    dp: "https://picsum.photos/80/80?random=3",
    story: "https://picsum.photos/80/80?random=13",
  },
  {
    dp: "https://picsum.photos/80/80?random=4",
    story: "https://picsum.photos/80/80?random=14",
  },
];

let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach((elem, idx) => {
  clutter += `<div class="story" id="${idx}"> <img src = "${elem.dp}" alt=""> </div>`;
});

stories.innerHTML = clutter;
stories.addEventListener("click",(dets)=>{
   let storyEl = dets.target.closest(".story");
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[storyEl.id].story})`
   document.querySelector("#full-screen").style.display = "block";

   hideTimer = setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
   }, 4000);
})
