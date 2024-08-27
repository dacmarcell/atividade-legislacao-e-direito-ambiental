import { Chuva } from "./chuva"
import { Pedra } from "./pedra"

class Main {
    private chuva: Chuva
    private pedra: Pedra

    constructor() {
        this.chuva = new Chuva()

    }

    start() {
        this.chuva.start()
        const milimetrosDeChuva = this.chuva.getMilimetrosDeChuva()
        this.pedra = new Pedra(milimetrosDeChuva)
    }
}

const main = new Main()

main.start()