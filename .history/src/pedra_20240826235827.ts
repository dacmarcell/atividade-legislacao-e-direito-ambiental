export class Pedra {
    constructor() {
    }

    start(milimetrosDeChuva: number) {
        if (milimetrosDeChuva > 1000) {
            this.liberarFosforo()
        }
    }

    private liberarFosforo() {
        console.log('fosforo liberado')
    }
}