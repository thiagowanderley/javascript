// GETTER and SETTER em Class

class Carro {
    constructor (nome) {
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar () {
        if (this.velocidade >= 100) return

        this.velocidade = this.velocidade + 1
        // ou => this.velocidade++
    }

    freiar () {
        if (this.velocidade <= 0) return

        this.velocidade = this.velocidade - 1
        // ou => this.velocidade--
    }
}

const c1 = new Carro ('Fusca');

for (i = 0; i <= 200; i++) {
    c1.acelerar()
}

console.log(c1)