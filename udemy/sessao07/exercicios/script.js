class Pessoa {
    constructor (nome, idade) {
        this.idade = idade;
        this.nome = nome;
    }

    saudar () {
        console.log(`Ola, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

class Aluno extends Pessoa {
    constructor (nome, idade, matricula) {
        super (nome, idade);
        this.matricula = matricula
    }

    mostrarMatricula () {
        console.log(`A matricula do aluno ${this.nome} é: ${this.matricula}`)
    }
}

const p1 = new Pessoa ('Thiago', 24);
const a1 = new Aluno ('Thiago', 24, 2367);

p1.saudar();
a1.mostrarMatricula()