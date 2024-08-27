import { Chuva } from "./chuva"

class Main {
    private chuva: Chuva

    constructor() {
        this.chuva = new Chuva()
    }

    start() {
        this.chuva.start()
    }
}

const main = new Main()

main.start()