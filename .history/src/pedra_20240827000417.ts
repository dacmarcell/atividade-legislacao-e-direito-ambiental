export class Pedra {
    private solo: Solo

    constructor() {
        this.solo = new Solo()
    }

    start(milimetrosDeChuva: number) {
        MIL_MILIMETROS_DE_CHUVA = 1000
        if (milimetrosDeChuva > MIL_MILIMETROS_DE_CHUVA) {
            this.liberarFosfato()
        }
    }

    private liberarFosfato() {
        console.log('[Pedra] Fosfato Liberado para o solo...')

    }
}