class DispositivoEletronico {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar () {
        if (this.ligado) {
            console.log(this.nome + ' ' + 'Está Ligado');
            return
        } else {
            this.ligado = true
        }
    }

    desligar () {
        if (!this.ligado) {
            console.log(this.nome + 'Está desligado');
            return
        } else {
            this.ligado = false
        }
    }
}

const dis1 = new DispositivoEletronico('Iphone');
dis1.ligar();
dis1.ligar();
dis1.desligar();
console.log(dis1)