// FILTER, MAP E REDUCE

// FILTER
// Retorna um array
const x = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter (valor, indice, array) {
    if (valor > 10) return true
}

const maior10 = x.filter(callBackFilter);
console.log(maior10);

//ou

const menor10 = x.filter( valor => {return valor < 10})
console.log(menor10)

//############################################################

const pessoas = [
    {nome:'Thiago' ,idade: 22},
    {nome:'Maria' ,idade: 35},
    {nome:'Eduardo' ,idade: 67},
    {nome:'Carla' ,idade: 21},
    {nome:'Wallace' ,idade: 14}
];

const nomePessoa = pessoas.filter( valor => {return valor.nome.length <= 6}); 
const menor18 = pessoas.filter( idade18 => idade18.idade < 18);
const maior50 = pessoas.filter( valor => valor.idade > 50);
const terminaA = pessoas.filter( valor => valor.nome.endsWith('a'));

console.log(nomePessoa);
console.log(menor18);
console.log(maior50);
console.log(terminaA);
