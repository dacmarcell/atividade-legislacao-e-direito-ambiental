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
        } else {
            console.log('[Planta] Não há fosfato suficiente para gerar tecido...')
        }
    }

    morrer() {
        console.log('[Planta] Planta morreu e se decompôs...');
        return this.fosfato;
    }

    getFosfato() {
        return this.fosfato
    }
}