let prompt = require('prompt-sync')()
let letter = prompt("Enter your word: ");
let vowels = 0;
let consonents = 0;
for(let i = 0; i<letter.length; i++){
    let word = letter.charAt(i);
    switch(word){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowels++;

        default: consonents++;
    }

}
console.log("Vowels :" + vowels);
console.log("Consonents :" + consonents++);