const nome = 'Thiago';
const sobrenome = 'Wanderley';
const idade = 24;

function soma (x, y) {
    return x + y;
}

// Exportação por bloco
export { nome, sobrenome, idade, soma }

//Exportação direta
export const msg = 'Ola mundo'

export class Pessoa {
    constructor(nome, sobrenome) {
        this.Pessoa = nome;
        this.sobrenome = sobrenome;
    }
}

//Exportando um padrão
export default function sub (n1, n2) {
    return n1 - n2;
}