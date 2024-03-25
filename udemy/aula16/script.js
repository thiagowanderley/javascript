// ARRAYS
// Imaginar um arrays como uma lista de coisas
// Trabalhar só com um tipo de dado dentro de um array

//                 0       1       2            3          4
const alunos = ['Maria', 'Luiz', 'João'];// 'Leticia', 'Vanessa'

alunos.push('Leticia')
alunos.push('vanessa')
// alunos.shift(); // Remove o primeiro indice do array
// alunos.pop(); // Remove o ultimo indice do array
// alunos[3] = 'Thiago' // Adc um novo elemento ao array de indice 3
// alunos.push('Otávio') // Adc um novo elemento ao fim do array
// alunos.unshift('Leonardo') // Adc um elemento ao inicio do array
console.log(alunos.slice(0, 2)) //Fatiamento --> só vai mostrar os elementos dos indices 0 a 2
console.log(alunos[1])
console.log(alunos.length) // Descobre o tamanho/quantidade de elementos do array
console.log(alunos)
