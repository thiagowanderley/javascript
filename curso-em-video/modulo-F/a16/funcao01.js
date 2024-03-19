// Função são ações executadas assim que são chamadas em decorrencia de algum evento

// Uma Função pode receber um parametro e retornar um resultado

function parimpar (x) {
    if (x % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

var res = parimpar(7)
console.log(res)

/* ou:

console.log(parimpar(7))
*/