// HERANÇA EM CLASS

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

class smartphone extends DispositivoEletronico {
    constructor (nome, cor, modelo) {
        super (nome); // SUPERCLASS
        this.cor = cor;
        this.modelo = modelo;
    }
}

class tablet extends DispositivoEletronico {
    constructor (nome, temWiFi) {
        super (nome);
        this.temWiFi = temWiFi;
    }

    ligar () {
        console.log('Está ligado')
    }
}

const dis1 = new DispositivoEletronico('Iphone');
const dis2 = new smartphone('Samsumg', 'Preto', 's24')
const dis3 = new tablet('Ipad', true);

console.log(dis3);