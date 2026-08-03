let elem = document.querySelectorAll(".elem");
let elemImage = document.querySelector(".elem img");

elem.forEach((val) => {
  val.addEventListener("mousemove", (dets) => {
    let rect = val.getBoundingClientRect();
    val.childNodes[3].style.left = dets.x - rect.left + "px";
    val.childNodes[3].style.top = dets.y - rect.top + "px";
  });
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
});
