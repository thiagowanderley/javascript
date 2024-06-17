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

class smartphone extends DispositivoEletronico {}

const dis1 = new DispositivoEletronico('Iphone');
const dis2 = new smartphone('Samsumg')
dis1.ligar();
dis1.ligar();
dis1.desligar();
console.log(dis1)
console.log(dis2)
