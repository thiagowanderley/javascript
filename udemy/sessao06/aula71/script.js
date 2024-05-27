// DEFINEPROPERTY || DEFINEPROPERTIES

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave 
        value: estoque,
        writable: false, // Pode alterar ou não o VALOR. Semelhante ao "freeze"
        configurable: true // Pode configurar a CHAVE. (não pode deletar / apagar)
    });
}

const pr01 = new Produto('Sabão', 6, 3);
console.log(pr01)

// OBJECT.KEYS => Mostra apenas as chaves de um determinado objeto em um Array
console.log(Object.keys(pr01))

//-----------DEFINE PROPERTIES-----------//

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.defineProperties(this, { //Pode configurar varias chaves
        nome: {
            enumerable: false, // Não permite aparecer o nome
           writable: true,
           configurable: true 
        },
        sobrenome: {
            writable: true,
            configurable: true 
        }
    })
}

const p1 = new Pessoa('Thiago', 'Wanderley');
console.log(p1);
