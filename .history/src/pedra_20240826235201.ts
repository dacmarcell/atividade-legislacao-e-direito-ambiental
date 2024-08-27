export class Pedra {
    milimetrosDeChuva: number;

    constructor(milimetrosDeChuva: number) {
        this.milimetrosDeChuva = milimetrosDeChuva;
    }

    start() {
        console.log('pedra iniciou')
    }
    end() {
        console.log('pedra terminou')
    }
}