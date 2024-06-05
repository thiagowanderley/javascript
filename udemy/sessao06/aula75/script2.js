function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.darDesconto = function (desconto) { // NÃO UTILIZAR ARROW
    this.preco = this.preco - (this.preco * (desconto / 100))
}

const prodA = new Produto('carro', 20000);
const prodB = {
    nome: 'Camisa',
    preco: 20
}

Object.setPrototypeOf(prodB, prodA);

prodA.darDesconto(10);
prodB.darDesconto(10);

console.log(prodB)
console.log(prodA)