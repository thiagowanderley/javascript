var q = [1, 4 ,5 ,12]
    //   0  1  2  3
q[4] = 89 // adicionando valor a um indice 
var comprimento = q.length // com o parametro ''.length'', representamos a quantidade de indice do nosso array
var crescente = q.sort() // como colocar o vetor em ordem crescente
q.push(10) // adiciona um valor consequente ao ultimo indice


console.log(`Nosso vetor é o ${q}`)
console.log(`O seu elemento na posicão 2, é: ${q[2]}`)
console.log(`O seu comprimento é: ${comprimento}`)
console.log(`Em ordem crescente ele fica: ${crescente}`)