import achievement from "./Achievements.js";
import homeHeading from "./HomeHeading.js";

let homeLeft = ()=>{
    return React.createElement('div',{class:'hero-content'},[achievement(),homeHeading()])
}

export default homeLeft;