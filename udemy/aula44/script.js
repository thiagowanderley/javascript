// TRATAMENTO DE ERROS 


function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {throw new Error('Apenas numeros')} //throw -> lança o erro para o bkend
    return x + y
}

console.log(soma(1, 3))
// tratando o erro lancado anteriormente
try {
    console.log(soma('1',2))
} catch(e) {
    console.log('ola')
}
