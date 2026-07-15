let main = document.getElementById("main");
let crsr = document.querySelector(".cursor");


main.addEventListener("mousemove",function(dets){
    crsr.style.left = `${dets.x}px`;
    crsr.style.top = `${dets.y}px`;

    crsr.style.transform = "scale(2)";
    
    let timer;

    clearTimeout(timer);

    timer = setTimeout(()=>{
        crsr.style.transform = "scale(1)";
    },400);
})