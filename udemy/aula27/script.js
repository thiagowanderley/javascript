// OPERADOR TERNARIO

const pontuacao = 1200

if (pontuacao >= 1000) {
    console.log('usuario VIP')
} else {
    console.log('Usuario comum')
}

// REFAZENDO OPERAÇÃO COM OPERADOR TERNARIO

//                                                 TRUE             FALSE
const situacaoDoUsuario = pontuacao>=1000 ? 'Usuario VIP' : 'Usuario Normal' ;
console.log(situacaoDoUsuario)