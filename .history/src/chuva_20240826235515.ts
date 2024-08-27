export class Chuva {
    private milimetrosDeChuva: number;

    start() {
        if (this.milimetrosDeChuva > 1000) {
            this.liberarFosforo()
        }
    }
    getMilimetrosDeChuva() { }
}