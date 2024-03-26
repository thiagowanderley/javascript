// VALORES PRIMITIVOS E POR REFERENCIA

//Primitivos (imutaveis) - string, number, boolean, undefined, null
//Referencias (mutáveis) - Arrays, object, function

//PRIMITIVOS
let a = 15;
let b = a //Ele faz uma copia do valor de "a"
a = 'y'
console.log(b)

//REFERENCIA
let x = [1, 2, 3]
let y = x //O valor de "y" vai receber todos os valores que foram mudados em "x"
let z = [...x] // "..." serve como um comando de "copiar" um determinado valor (imutavel)
x[0] = 11
console.log(y, z)