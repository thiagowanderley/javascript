// PROTOTYPES

function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Thiago', 'Wanderley');
const p2 = new Pessoa('Gabriela', 'Bonfim');

console.log(p1.nomeCompleto());
console.dir(p2.nomeCompleto());