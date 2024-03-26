// OBJETOS


/*
const nome1 = 'luiz';
const sobrenome1 = 'miranda';
const idade1 = 25;
*/
/*
const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25
};
*/

// CRIANDO OBJETOS COM FUNÇÕES
function criarPessoa(nome, sobrenome, idade) {
    return {nome , sobrenome , idade};
}

const pessoa1 = criarPessoa('Thiago', 'Vanderlei', 24);

// CRIANDO METODOS DENTRO DE OBJETOS
const pessoa2 = {
    nome: 'João',
    sobrenome: 'Vanderlei',
    idade: 16,

    dadosCompleto() {
        console.log(`O meu nome completo é ${this.nome} ${this.sobrenome}, tenho ${this.idade}`)
    },

    dataDeNascimento() {
       console.log(2024 - this.idade);
    },

    incrementoIdade() {
        this.idade++
    }
};

pessoa2.incrementoIdade()
pessoa2.dadosCompleto()

