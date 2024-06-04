/* METODOS EM OBJECTS

- NOVOS:

=> Object.values => dieferente do object.keys, ele retorna o valor 
=> Object.entries => Retorna o objeto dentro de um array
=> Object.assign(des, any) => espalha/copia um objeto
=> Object.getOwnPropertyDescriptor(o, 'prop') => Retorna as propriedades de um objeto
=> ...(spread)

- JÁ VISTOS: 

=> Object.keys (retorna as chaves)
=> Object.freeze (congela o objeto)
=> Object.defineProperties (define varias propriedades)
=> Object.defineProperty (define uma propriedade)
*/

// Object.assign

const produto = {
    nome: 'Caneca',
    preco: 1.8
};
//const outraCoisa = {...produto} // ou
const outraCoisa = Object.assign({}, produto, {material: 'porcelana'});
outraCoisa.nome = 'Copo'
outraCoisa.preco = 20

console.log(outraCoisa);
console.log(produto);

// Object.getOwnPropertyDescriptor

const pessoa = {
    nome: 'Thiago',
    idade: 24
};
Object.defineProperty(pessoa, 'nome', {
    configurable: false,
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))

// Object.values

console.log(Object.values(pessoa))

// Object.entries

console.log(Object.entries(pessoa))
// Iterando o objeto
for (let x of Object.entries(pessoa)) {
    console.log(x);
}
for (let y of Object.entries(pessoa)) {
    console.log(y[0], y[1])
}

