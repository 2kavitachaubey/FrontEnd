function abc(fnc) {
  fnc(function f1(f2) {
    f2(function f3(f4){
        f4(function f5(){
            console.log("hello6 and final hello.");
        });
    });
  });
}
abc(function (f1) {
  f1(function f2(f3) {
    f3(function f4(f5){
        f5();
    });
  });
});
