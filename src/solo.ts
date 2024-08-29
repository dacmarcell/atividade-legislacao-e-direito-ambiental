import { Planta } from "./planta";

export class Solo {
    private fosfato: number;

    constructor() {
        this.fosfato = 0;
    }

    receberFosfato(quantidade: number) {
        this.fosfato += quantidade;
        console.log(`[Solo] Fosfato recebido: ${quantidade}mg`);
    }

    transferirFosfatoParaPlanta(planta: Planta) {
        if (this.fosfato > 0) {
            planta.absorverFosfato(this.fosfato);
            this.fosfato = 0;
        } else {
            console.log('[Solo] Não há fosfato suficiente no solo para a planta.');
        }
    }

    decomporPlanta(planta: Planta) {
        const fosfato = planta.getFosfato();
        console.log(`[Solo] Fosfato retornado ao solo: ${fosfato}mg`);
        this.fosfato += fosfato;
    }

    getFosfato() {
        return this.fosfato;
    }
}