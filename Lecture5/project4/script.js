let post = document.getElementById("postImg");
let heart = document.querySelector(".heart");

function showHeart() {
  heart.style.transform = "translate(-50%,-50%) scale(1)";
  heart.style.opacity = "0.8";

  setTimeout(() => {
    heart.style.opacity = "0";
  }, 1000);

  setTimeout(() => {
    heart.style.transform = "translate(-50%,-50%) scale(0)";
  }, 2000);
}

function addHeard(){
    like.innerHTML = "<i class='ri-poker-hearts-fill'></i>";
    like.style.color = "red";
}

function removeHeart(){
    like.innerHTML = "<i class='ri-poker-hearts-line'></i>"
    like.style.color = "black";
}

let flag = 0;

post.addEventListener("dblclick", function () {
  if(flag == 0){
    addHeard();
    showHeart();
    flag = 1;
  }else{
    removeHeart();
    flag = 0
  }
});

let like = document.getElementById("like");
like.addEventListener("click", function () {
  if (flag == 0) {
    addHeard();
    showHeart();
    flag = 1;
  }else{
    removeHeart();
    flag = 0;
  }
});
