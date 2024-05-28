// GETTERS E SETTERS

// Getter => Obtem valor 
// Setter => Configura o valor

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoqueProt = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoqueProt,
        set: valor => {
            if (typeof valor !== 'number') {
                throw new TypeError('error');
            }
            estoqueProt = valor;
        }
    });
}

function criarProduto (nome) {
    return {
        get nome() {return nome},
        set nome(valor) {
            nome = valor;
        }
    }
}

const p1 = new Produto ('camiseta', 20, 3);
p1.estoque = 40;
console.log(p1.estoque);