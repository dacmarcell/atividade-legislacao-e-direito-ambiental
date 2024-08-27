export class Chuva {
    private milimetrosDeChuva: number;

    constructor() {
        this.milimetrosDeChuva = 0
    }

    start() {
        while (this.milimetrosDeChuva < 1000) {
            this.milimetrosDeChuva += 100
        }
    }

    getMilimetrosDeChuva() {
        return this.milimetrosDeChuva
    }
}