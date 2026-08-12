class Product{
    constructor(name,price,discount){
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    finalPrice(){
        return this.price - (this.price*this.discount/100);
    }
}

let product1 = new Product("nirma powder", 20, 20);
console.log(product1.finalPrice());
let product2 = new Product("harpic", 90, 30);
console.log(product2.finalPrice());