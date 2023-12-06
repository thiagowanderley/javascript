var id = 17
console.log(`Sua idade é ${id}`)
if (id < 16) {
    console.log('Não vota')
} else if (id >= 16 && id < 18 ) {
    console.log('Voto opicional')
} else if (id >= 18 && id < 65) {
    console.log('Voto obrigatorio')
} else if ( id >= 65) {
    console.log('Voto opcional')
}