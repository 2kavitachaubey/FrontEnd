let methods ={
    normalFunc : function(){
        console.log(this);
    },
    arrowFunc: ()=>{
        console.log(this);
    }
}
methods.normalFunc();
methods.arrowFunc();
methods.arrowFunc.call(methods);
methods.normalFunc.call(methods);