// Funções construtoras
// Cria Objetos / Retorna Objetos
// Começa com letra maiuscula, Ex: Pessoa ()

function Pessoa(nome, sobrenome) {
    //Funções e metodos internos
    //Não vai ser retornado fora da função
    const metodoInterno = function () {

    }
    const saudacao = 'ola mundo'

    // Metodos publicos
    // Vão ser retornados externamente 
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        const nomeCompleto = nome + ' ' + sobrenome
        return nomeCompleto
    }
}

const p1 = new Pessoa('Thiago', 'Wanderley')
const p2 = new Pessoa('Luiza', 'Cardoso')

console.log(p1.metodo())

