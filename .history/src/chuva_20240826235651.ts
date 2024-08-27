export class Chuva {
    private milimetrosDeChuva: number;

    constructor() {
        this.milimetrosDeChuva = 0
    }

    start() {
        while (this.milimetrosDeChuva < 1000) {
            console.log('Choveu 1100ML')
            this.milimetrosDeChuva += 100
        }
    }

    getMilimetrosDeChuva() {
        return this.milimetrosDeChuva
    }
}