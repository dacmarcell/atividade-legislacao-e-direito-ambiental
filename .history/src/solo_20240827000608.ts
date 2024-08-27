export class Solo {
    private fosfato: number

    constructor() {
        this.fosfato = 0
    }

    receberFosfato(quantidade: number) {
        this.fosfato += quantidade
    }

    getFosfato() {
        return this.fosfato
    }
}