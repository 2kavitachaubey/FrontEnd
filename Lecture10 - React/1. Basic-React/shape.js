import square from './square.js';
import circle from './circle.js';

let shape = ()=>{
    return React.createElement('div',null,[square(),circle()])
}

export default shape;