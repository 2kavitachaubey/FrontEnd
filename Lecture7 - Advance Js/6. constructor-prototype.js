//constructor function without class...
// before es6 constructor are made like this.
function User() {
  this.name = "kavita";
  this.login = function () {
    console.log(this.name + " " + " Logged in.");
  }; // each user will have different login, they can't be same.
}
User.prototype.userLogin = function () {
  console.log("User successfully logged in.");
  // each your share same userLogin.
};
let u1 = new User();
console.log(u1);

console.log(u1.__proto__ === User.prototype); 
console.log(u1.__proto__ === Object.prototype); 