function debouncing(fnc, delay) {
    console.log("1. debouncing started");

    let timer;

    return function () {
        console.log("2. returned function is called");

        clearTimeout(timer);

        console.log("3. starting timer");

        timer = setTimeout(fnc, delay);
    };
}

let debounced = debouncing(function () {
    console.log("4. fnc is running");
}, 3000);

console.log("5. debounced contains:", debounced);

document.querySelector("#input").addEventListener("input", debounced);


// function abc(){
//     return function(){
//         console.log("hello");
//     }
// }
// let result = abc();
// result();