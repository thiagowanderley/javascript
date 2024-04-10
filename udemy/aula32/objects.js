const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Wanderley',
    idade: 23, 
    endereco: {
        rua: 'Av Artemia Pires',
        numero: 3005
    }
}

const pessoa2 = {
    nome: 'Gabriela',
    sobrenome: 'Bomfim',
    idade: 22, 
    endereco: {
        rua: 'Pedro Suzarte',
        numero: 476
    }
}

const {nome: n , sobrenome , idade , endereco: {rua, numero}, ...resto } = pessoa
// Estrutura basica para desestruturacao de dados
// Podemos tambem redefinir elementos, como exemplo o "n" no lugar de "nome"
const {nome,...sobra} = pessoa2

console.log(n, resto)
console.log(nome, sobra)