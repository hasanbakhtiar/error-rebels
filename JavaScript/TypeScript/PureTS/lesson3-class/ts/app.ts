class Car {

    private ibrand: string;
    public iyear: number;
    public icolor: string;


    constructor(brand: string, year: number, color: string) {
        this.ibrand = brand;
        this.iyear = year;
        this.icolor = color;
    }
    protected calculateSpeed(km:number,hour:number){
        return `${this.ibrand}: ${km/hour} km/h`
    }
}

class Moto extends Car{
    constructor(brand: string, year: number, color: string){
        super(brand,year,color);
    }

    public newData(){
        return this.calculateSpeed(200,4);
    }

}



var myCar = new Car("BMW X5",2000,"white");
var myMoto = new Moto("Yamaha",2023,"black");

console.log(myMoto.newData());
