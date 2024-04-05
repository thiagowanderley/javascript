// DESESTRUTURAÇÃO - ARRAYS

let a = 'A';
let b = 'B';
let c = 'C';

 [a, b, c] = [1, 2, 3];

//console.log(a, b, c)

//.....................................

//Indice          0   1   2   3   4
 const numeros = [10, 20, 30, 40, 50];

//Representa:  0              1
 const [primeiroNumero, segundoNumero, ...resto] = numeros;
 const [ , , terceiroNumero, quartoNumero, ...sobra] = numeros

// resto(...) : representa o resto dos indices que não foram chamados

 console.log(primeiroNumero, segundoNumero)
 console.log(terceiroNumero)
 console.log(resto)
 console.log(sobra)

//.....................................

//                  0          1          2
//               0, 1, 2    0, 1, 2    0, 1, 2
const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = lista

console.log(lista1)
console.log(lista2[2])
