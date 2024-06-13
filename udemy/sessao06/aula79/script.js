// FACTORY FUNCTIONS + PROTOTAYPES

function criaPessoa (nome, sobrenome) {
    const pessoaProto = {
        falar () {
            return `${this.nome} está falando: Olá!`
        }, 

        nomeCompleto () {
            return nome + ' ' + sobrenome
        }
    }
    return Object.create(pessoaProto, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Thiago', 'Wanderley');
const p2 = criaPessoa('Carlos', 'Eduardo')
console.log(p1.falar());
console.log(p1.nomeCompleto());