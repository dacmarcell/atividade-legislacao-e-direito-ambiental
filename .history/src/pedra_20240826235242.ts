export class Pedra {
    milimetrosDeChuva: number;

    constructor(milimetrosDeChuva: number) {
        this.milimetrosDeChuva = milimetrosDeChuva;
    }

    start() {
        if (this.milimetrosDeChuva > 1000) {
            this.liberarFosforo()
        }
    }

    liberarFosforo() {
        console.log('fosforo liberado')
    }
}