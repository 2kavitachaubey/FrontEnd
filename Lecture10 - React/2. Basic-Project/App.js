import navbar from "./Navbar.js";
import homeCombineAll from "./HomeSection.js";
let combineNav = ()=>{
    return React.createElement('div',{className:'app'},[navbar(),homeCombineAll()])
}

export default combineNav;