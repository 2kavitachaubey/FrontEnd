import homeLeft from "./HomeLeft.js"
import homeImage from "./HomeImage.js"

let homeCombineAll = ()=>{
    return React.createElement('div',{className:'hero'},[homeLeft(),homeImage()])
}

export default homeCombineAll;