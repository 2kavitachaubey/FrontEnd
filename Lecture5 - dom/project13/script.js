let wKeys = ["A","E","C","H","G","B","F","D"];
let bKeys = ["W","R","Y","H","N","O","P"];

let audio1 = ["24_C1.m4a", "36_C2.m4a", "48_C3.m4a", "60_C4.m4a", "72_C5.m4a", "84_C6.m4a", "96_C7.m4a", "108_C8.m4a"];
let audio2 = ["30_Fs1.m4a", "42_Fs2.m4a", "54_Fs3.m4a", "66_Fs4.m4a", "78_Fs5.m4a", "90_Fs6.m4a", "102_Fs7.m4a"];


document.addEventListener("keydown",(e)=>{
    let index = wKeys.indexOf(e.key.toUpperCase());
    if(index !== -1){
        let press = document.createElement("audio");
        press.src = `sounds/${audio1[index]}`;
        document.body.appendChild(press);
        press.play();
    }
})

document.addEventListener("keydown",(e)=>{
    let index = bKeys.indexOf(e.key.toUpperCase());
    if(index !== -1){
        let press = document.createElement("audio");
        press.src = `sounds/${audio2[index]}`;
        document.body.appendChild(press);
        press.play();
    }
})