// FILTER, MAP E REDUCE

// REDUCE
/*
    => Reduz o array a um unico elemento
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numeros2 = [...numeros];
const numeros3 = [...numeros];
const numeros4 = [...numeros];

const soma = numeros2.reduce( (acumulador, valor, indice, array) => {
    return acumulador += valor
}, 0); // o valor "0" faz referencia ao valor inicial do acumulador 

console.log(soma);

//##########################################

const impaPa = numeros3.reduce( (acumulador, valor, indice, array) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador
}, []);

console.log(impaPa)

const numDobro = numeros4.reduce( (acumulador, valor, indice, array) => {
    acumulador.push(valor * 2)
    return acumulador
}, []);

console.log(numDobro)

//###########################################

const pessoas = [
    {nome:'Thiago' ,idade: 22},
    {nome:'Maria' ,idade: 35},
    {nome:'Eduardo' ,idade: 67},
    {nome:'Carla' ,idade: 21},
    {nome:'Wallace' ,idade: 14}
];

const maisVelha = pessoas.reduce( (acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
},0);

console.log(maisVelha);