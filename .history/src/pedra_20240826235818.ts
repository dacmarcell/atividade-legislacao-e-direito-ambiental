export class Pedra {
    milimetrosDeChuva: number;

    constructor() {
    }

    start(milimetrosDeChuva: number) {
        if (this.milimetrosDeChuva > 1000) {
            this.liberarFosforo()
        }
    }

    liberarFosforo() {
        console.log('fosforo liberado')
    }
}