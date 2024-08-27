import { Chuva } from "./chuva"
import { Pedra } from "./pedra"
import { Planta } from "./planta"
import { Solo } from "./solo"

class Main {
    private chuva: Chuva
    private pedra: Pedra
    private solo: Solo
    private planta: Planta

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

        const quantidadeFosfato = this.solo.getFosfato()
        if (quantidadeFosfato > 0) {
            this.planta.absorverFosfato(quantidadeFosfato)
        }
    }
}

const main = new Main()

main.start()