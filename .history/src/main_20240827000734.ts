import { Chuva } from "./chuva"
import { Pedra } from "./pedra"
import { Solo } from "./solo"

class Main {
    private chuva: Chuva
    private pedra: Pedra
    private solo: Solo

    constructor() {
        this.chuva = new Chuva()
        this.pedra = new Pedra()
        this.solo = new Solo()
    }

    start() {
        this.chuva.start()
        const milimetrosDeChuva = this.chuva.getMilimetrosDeChuva()
        //Libera fosforo ao bater 1000mm de chuva
        this.pedra.start(milimetrosDeChuva)

        if (this.solo.getFosfato() > 0) {
            this.planta.absorverFosfato(this.solo.getFosfato())
        }
    }
}

const main = new Main()

main.start()