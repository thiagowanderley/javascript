// FILTER + MAP + REDUCE

// => pegar numeros pares (filter)
// => dobrar os pares (map)
// => somar todos (reduce)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros
.filter( val => val % 2 === 0)
.map( valor => valor*2)
.reduce((acum, valor) => {
    acum += valor
    return acum
}, 0);

console.log(pares);

