import { Solo } from "./solo"

export class Pedra {
    private solo: Solo
    private fosfato: number

    constructor() {
        this.solo = new Solo()
        this.fosfato = 10000
    }

    start(milimetrosDeChuva: number) {
        const MIL_MILIMETROS_DE_CHUVA = 1000
        if (milimetrosDeChuva >= MIL_MILIMETROS_DE_CHUVA) {
            this.liberarFosfato()
        }
    }

    private liberarFosfato() {
        console.log('[Pedra] Fosfato Liberado para o solo...')
        while (this.fosfato > 0) {
            this.solo.receberFosfato(100)
            this.fosfato -= 100
        }
    }
}