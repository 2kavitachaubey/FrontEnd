import navbar from "./Navbar.js";
import homeCombineAll from "./HomeSection.js";
let combineNav = ()=>{
    return React.createElement('div',{class:'app'},[navbar(),homeCombineAll()])
}

export default combineNav;