// let h1 = React.createElement('h1',null,'Hello world');
// console.log(h1);
// let container = document.querySelector('#container');
// let root = ReactDOM.createRoot(container);
// root.render(h1);

import shape from "./shape.js";

let container = document.querySelector('#container');
let root = ReactDOM.createRoot(container);

root.render(shape())