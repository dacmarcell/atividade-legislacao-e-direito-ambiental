import { Chuva } from "./chuva"
import { Pedra } from "./pedra"
import { Planta } from "./planta"
import { Solo } from "./solo"
class Main {
    private chuva: Chuva;
    private pedra: Pedra;
    private solo: Solo;
    private planta: Planta;

    constructor() {
        this.solo = new Solo();
        this.chuva = new Chuva();
        this.pedra = new Pedra();
        this.planta = new Planta();
    }

    start() {
        this.chuva.start();
        const milimetrosDeChuva = this.chuva.getMilimetrosDeChuva();

        // Libera fosfato ao bater 1000mm de chuva
        this.pedra.start(milimetrosDeChuva);

        // Planta absorve fosfato do solo e gera tecido
        this.solo.transferirFosfatoParaPlanta(this.planta);
        this.planta.gerarTecido();

        // Simula o ciclo natural, onde a planta eventualmente morre e se decompõe
        this.planta.morrer();
        this.solo.decomporPlanta(this.planta);
    }
}

const main = new Main();
main.start();