export class Chuva {
    private milimetrosDeChuva: number;

    start() {
        this.milimetrosDeChuva = 100
        while (this.milimetrosDeChuva < 1000) {
            this.milimetrosDeChuva += 100
        }
    }

    getMilimetrosDeChuva() {
        return this.milimetrosDeChuva
    }
}