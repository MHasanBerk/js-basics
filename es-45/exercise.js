function Smartphone(brand,name,price){
    this.brand = brand;
    this.name = name;
    this.price = price;
};

let iphone = new Smartphone("Apple","iPhone 14",1000);
let s22 = new Smartphone("Samsung","S22",975);

console.log(iphone);
console.log(s22);