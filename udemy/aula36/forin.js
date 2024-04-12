const carros = ['pajero', 'triton', 'eclipse']

for (i = 0; i < carros.length; i++) {
   // console.log(carros[i])
}

//mesmo resultado, aplicações diferentes
//Tem a função de ler os indices de uma variavel
//Funciona com arrays e objetos

for (indice in carros) {
   // console.log(carros[indice])
}

const pessoa = 
    {
    nome: 'Thiago',
    sobrenome: 'Wanderley',
    idade: 24
    }


for (let x in pessoa) {
    let y = x.push = 'ola'
    //console.log(y)
    console.log(x, pessoa[x])
}