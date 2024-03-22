// A=B ; B=C ; C=A ----> B C A

let varA = 'a'
let varB = 'b'
let varC = 'c'

const z = varA

const x = varA = varB
const y = varB = varC

console.log(x)
console.log(y)
console.log(z)



// Lembre-se: O programa ler o codigo de cima pra baixo

