const falar = {
    falar () {
        return `${this.nome} está falando 'ola!'`
    }
};

const identidade = {
    identidade () {
        return this.nome + ' ' + this.sobrenome
    }
};

const pessoaPrototype = {...falar, ...identidade}

function criarPessoa (nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criarPessoa('Luiz', 'Rebouças')
console.log(p1.falar());
console.log(p1.identidade());

