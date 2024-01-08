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


const myCar = new Car("Bmw X5",2000);
console.log(myCar.infomodel);
console.log(myCar.showData());