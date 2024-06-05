// HERANÇA EM PROTOTYPES

// Produtos -> Camiseta e Caneca
// Camiseta -> cor ; Caneca -> material 

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco * (valor / 100))
};
Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100))
};

// Setando o prototype do Produto em Camiseta e Caneca
function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco, cor)
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
//------------------------------------------------
function Caneca (nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 10);
const camiseta = new Camiseta('Regata', 24, 'azul');
const caneca = new Caneca('Aniversario', 40, 'Porcelana')
camiseta.desconto(10);
caneca.desconto(20)
console.log(camiseta);
console.log(produto);
console.log(caneca)