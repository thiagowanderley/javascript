// GETTERS E SETTERS

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.defineProperty(this, 'nome', {
        enumerable: true,
        configurable: true,
        get: () => nome,
        set: (valor) => {
            if (typeof valor !== 'string') {console.log('error')}
        }
});

}
const p1 = new Pessoa(8, 'Wanderley');
console.log(p1);
