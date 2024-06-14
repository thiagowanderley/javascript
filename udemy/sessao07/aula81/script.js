// GETTER and SETTER em Class

class Carro {
    constructor (nome) {
        this.nome = nome;
        this.velocidade = 0;
    }

    get _velocidade () {
        console.log('GETTER')
        let vel;
        this.velocidade > 100 || this.velocidade < 0 ? vel = 'Val invalida' : vel = this.velocidade;
        return vel 
    }

    set _velocidade (val) {
        console.log('SETTER')
        if (typeof val !== 'number') return;
        if ( val >= 100 || val < 0) return;
        val = this.velocidade
    }
    
    acelerar (val) {
        if (val >= 100) return this.velocidade = 100

        this.velocidade = this.velocidade + val
        // ou => this.velocidade++
    }

    freiar () {
        if (this.velocidade <= 0) return

        this.velocidade = this.velocidade - 1
        // ou => this.velocidade--
    }
        
}

const c1 = new Carro ('Fusca');
c1.acelerar(2)
console.log(c1._velocidade = 97896)
console.log(c1)