export class Planta {
    private fosfato: number

    constructor() {
        this.fosfato = 0
    }

    absorverFosfato(quantidade: number) {
        this.fosfato += quantidade
        console.log('[Planta] Fosfato Absorvido...')
    }

    gerarTecido() {
        if (this.fosfato > 0) {

            console.log('[Planta] Tecido Gerado...')
        }
    }

    private getFosfato() {
        return this.fosfato
    }
}