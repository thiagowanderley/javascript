// FILTER, MAP E REDUCE

// MAP
/*
=> Altera valores do array original

=> Diferente do filter que faz um filtro dado uma certa restrição. O "map" mapeia todos os arrays e faz uma alteração do mesmo
*/ 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobraNumeros = numeros.map( (valor, indice) => {return `${indice} => ${valor * 2}`})
console.log(dobraNumeros)

const pessoas = [
    {nome:'Thiago' ,idade: 22},
    {nome:'Maria' ,idade: 35},
    {nome:'Eduardo' ,idade: 67},
    {nome:'Carla' ,idade: 21},
    {nome:'Wallace' ,idade: 14}
];

const apenasNomes = pessoas.map( obj => obj.nome );
const apenasIdade = pessoas.map( obj => {
    delete obj.nome 
    return obj.idade
});
const adcId = pessoas.map( (obj, indice) => {
    obj.id = indice
    return obj
});

//console.log(apenasNomes)
//console.log(adcId)
console.log(pessoas)




