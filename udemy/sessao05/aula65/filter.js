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