// CLASS em POO

// Sintaxe =>
class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    saudacao () {
        return `${this.nome} está dizendo: Olá!!`
    }

    identidade () {
        return `Nome completo => ${this.nome} ${this.sobrenome}`
    }
}

// Instanciar => Criar um objeto através da função, ex: 
const p1 = new Pessoa('Thiago', 'Wanderley');
console.log(p1.saudacao())


