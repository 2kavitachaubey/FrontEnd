class User{
    constructor (name, age){
        this.name= name;
        this.age= age;
    }
    login(){
        console.log(this.name+ " logged in..");
    }
}

let user1 = new User("Kavita",24);
user1.login();
let user2 = new User("Mehak",24);
user2.login();
let user3 = new User("Anchal",24);
user3.login();