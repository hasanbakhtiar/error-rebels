class Car{
    constructor(model,year,price){
            this.infomodel = model;
            this.infoyear = year;
            this.infoprice = price;
    }

    showData() {
        return `model:${this.infomodel} age:${new Date().getFullYear() - this.infoyear}` 
    }
}


class Moto extends Car{
    constructor(model,year,price){
        super(model,year,price)
    }
}



const myCar = new Car("Bmw X5",2000);
console.log(myCar.infomodel);
console.log(myCar.showData());


const myMoto = new Moto("Yamaha",1995);
console.log(myMoto.showData());