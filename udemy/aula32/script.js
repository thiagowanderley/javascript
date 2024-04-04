// FUNÇÕES
const numero = 0

function somar (x, y) {
    const soma = x + y
    return soma
}

console.log(somar(5, 5));

function zeroAEsquerda (num) {
   // const zeroAEsquerda = num < 10 ? `0${num}` : num ; 
    if (num < 10 && num > 0) {
       return num = `0${num}`
    } else {
       return num
    }
}

console.log(zeroAEsquerda(numero));