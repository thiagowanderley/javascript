// OBJETOS => Parte 02

// Criando padrões com Factory Functions

function criarPessoa (nome, sobrenome) {
    return {
        nome, sobrenome,
        nomeCompleto() {return `${this.nome} ${this.sobrenome}`}
    }
}

const p1 = criarPessoa('Thiago', 'Wanderley');
console.log(p1.nomeCompleto())

// Criando padrões com Constructor Functions

function Pessoa (nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Deixando o objeto Inalterado
    //Só vai ser permitido fazer alterações antes da linha "freeze"
}

const pessoa01 = new Pessoa('Luiz', 'Miranda');
const pessoa02 = new Pessoa('Carlos', 'Eduardo');
console.log(pessoa01);
console.log(pessoa02);