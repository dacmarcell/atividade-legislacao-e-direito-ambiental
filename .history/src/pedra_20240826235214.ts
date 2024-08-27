export class Pedra {
    milimetrosDeChuva: number;

    constructor(milimetrosDeChuva: number) {
        this.milimetrosDeChuva = milimetrosDeChuva;
    }

    start() {
        if (this.milimetrosDeChuva > 1000) {
            console.log('pedra iniciou')
        }
    }
    end() {
        console.log('pedra terminou')
    }
}