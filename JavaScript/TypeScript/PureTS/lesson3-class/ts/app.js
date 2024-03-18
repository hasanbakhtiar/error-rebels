var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, year, color) {
        this.ibrand = brand;
        this.iyear = year;
        this.icolor = color;
    }
    Car.prototype.calculateSpeed = function (km, hour) {
        return "".concat(this.ibrand, ": ").concat(km / hour, " km/h");
    };
    return Car;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, year, color) {
        return _super.call(this, brand, year, color) || this;
    }
    Moto.prototype.newData = function () {
        return this.calculateSpeed(200, 4);
    };
    return Moto;
}(Car));
var myCar = new Car("BMW X5", 2000, "white");
var myMoto = new Moto("Yamaha", 2023, "black");
console.log(myMoto.newData());
