export class Pedra {
    constructor() {
    }

    start(milimetrosDeChuva: number) {
        if (milimetrosDeChuva > 1000) {
            this.liberarFosfato()
        }
    }

    private liberarFosfato() {
        console.log('fosforo liberado')
    }
}