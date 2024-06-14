/*
    GETTER => é para acessar o valor.
    SETTER => é para definir ou mudar o valor.

    GETTER serve exclusivamente para representar um valor, 
    já o SETTER altera um determinado valor e precisa de um parametro

    Diferente de Metodos. Para representar um GET ou SET, temos:
    GET => constante.get ~ Não tem parenteses
    SET => constante.set = ~ Precisa de um sinal  
*/

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto () {
        return this.nome + ' ' + this.sobrenome
    }

    set nomeCompleto (val) {
        val = val.split(' ');
        this.nome = val.shift();
        this.sobrenome = val.join(' ');
    }
}

const p1 = new Pessoa ('Thiago', 'Wanderley')
console.log(p1)