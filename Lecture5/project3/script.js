let bulbId = document.getElementById("bulb");
let on = document.getElementById("on");
let flag = 0;
on.addEventListener("click", function () {
  if (flag == 0) {
    bulbId.style.backgroundColor = "rgba(191, 191, 105, 0.573)";
    bulbId.style.boxShadow = "none";
    on.innerHTML = "On";
    flag = 1;
  } else {
    bulbId.style.backgroundColor = "yellow";
    bulbId.style.boxShadow = "0 0 50px yellow";
    on.innerHTML = "Off";
    flag = 0;
  }
});
// let off = document.getElementById("off");
// off.addEventListener("click",function(){
//     bulbId.style.backgroundColor = "rgba(191, 191, 105, 0.573)";
//     bulbId.style.boxShadow = "none";
// })
