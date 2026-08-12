class Car{
    constructor (brand, speed){
        this.brand= brand;
        this.speed= speed;
    }
    AboutCar(){
        console.log(this.brand+ " " + this.speed);
    }
}

let car1 = new Car("BMW", "150km/hr");
car1.AboutCar();