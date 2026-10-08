function throttle(fnc,delay){
    let last = 0;
    return function(){
        let current = Date.now();
        if(current-last >= delay){
            last = current;
            fnc();
        }
    }
}

window.addEventListener("mousemove",throttle(function(){
    console.log("hello");
},1000));