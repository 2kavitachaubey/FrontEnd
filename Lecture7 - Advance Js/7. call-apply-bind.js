function abc(a,b,c){
    console.log(this.name);
    console.log(a + b +c);
    // blank cause there is no name in this.
}
let obj = {
    name : "kavita"
}
abc.call(obj,1,2,3); // 1 2 3 are parameter
// abc will have a name.

abc.apply(obj,[1,2,3]);
// parameter are in array in apply

let newfunc = abc.bind(obj,1,2,3);
newfunc();
//bind is same as call but make a new function

