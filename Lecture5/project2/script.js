let isStatus = document.querySelector("p");
let add = document.getElementById("add");

let flag = 0;
add.addEventListener("click", function () {
  if (flag === 0) {
    isStatus.innerHTML = "Friends";
    add.innerHTML = "Remove";
    add.style.backgroundColor = "rgba(149, 148, 148, 0.79)";
    flag = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    add.innerHTML = "Add Friend";
    add.style.backgroundColor = "rgb(0, 157, 255)";
    flag = 0;
  }
});
