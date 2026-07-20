let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let p = document.querySelector("p");

btn.addEventListener("click",()=>{
    let percent = 0;
    let random = Math.floor(Math.random()*501);
    let width = setInterval(() => {
        percent++;
        inner.style.width = percent +"%";
        p.innerHTML = percent + "%";
    }, random);

    setTimeout(() => {
        clearInterval(width);
        p.innerHTML = "Downloaded";
    }, random*100);
})