// ESTRUTURA DE REPETICÃO

//for (Criar uma variavel ; Condicao ; incremento || decremento  ) {}

/*
for (let contagem = 1 ; contagem < 11 ; contagem = contagem + 2 ) {
    console.log(`Numero ${contagem}`)
}

for (let i = 0; i <= 20; i++ ) {
    let ip = i % 2 === 0? 'par' : 'impar'
    console.log(i, ip)
}
*/

const carros = ['pajero', 'triton', 'eclipse', 'outlander'];

for (i = 0; i < carros.length; i++) {
    console.log(carros[i], i)
}