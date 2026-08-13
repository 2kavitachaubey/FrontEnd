class Student{
    constructor(name, rollNo){
        this.name = name;
        this.rollNo= rollNo;
    }
    details(){
        console.log(this.name + " " + this.rollNo);
    }
}
Student.prototype.introduction = function(){
    console.log("hello "+ this.name);
}
let stu1 = new Student("kavita", 1000024336);
console.log(stu1);
stu1.introduction();