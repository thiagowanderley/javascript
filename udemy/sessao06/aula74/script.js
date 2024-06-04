// PROTOTYPES

function Pessoa (nome, sobrenome, idade) {
    nome = this.nome;
    sobrenome = this.sobrenome
    idade = this.idade
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
Pessoa.prototype.falar = () => {
    return `Meu nome completo é ${this.nome} ${this.sobrenome}, e tenho ${this.idade} anos`
};

const pessoa01 = new Pessoa('Thiago', 'Wanderley', 24);
const data = new Date();

console.log(pessoa01);
//console.dir(p1);
//console.dir(data);