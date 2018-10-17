class Animal{
    constructor(public especie: string, public som: string) {
        this.especie = especie;
        this.som = som;
    }

    emitirSom() : string{
        return 'Não definido';
    }
}

class Cachorro extends Animal {

    constructor() {
        super('Cachorro', 'woof woof');
    }

    emitirSom() : string {
        return this.som;
    }

}

let animal = new Animal('especie do animal', 'ablablab');
console.log(animal.emitirSom());
let cachorro = new Cachorro();
console.log(cachorro.emitirSom());
