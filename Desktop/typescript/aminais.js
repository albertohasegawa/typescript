var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(especie, som) {
        this.especie = especie;
        this.som = som;
        this.especie = especie;
        this.som = som;
    }
    Animal.prototype.emitirSom = function () {
        return 'Não definido';
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super.call(this, 'Cachorro', 'woof woof') || this;
    }
    Cachorro.prototype.emitirSom = function () {
        return this.som;
    };
    return Cachorro;
}(Animal));
var animal = new Animal('especie do animal', 'ablablab');
console.log(animal.emitirSom());
var cachorro = new Cachorro();
console.log(cachorro.emitirSom());
