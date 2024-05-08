// Factory Functions 
//Retorna um objeto

function criaPessoa (nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        imc: function() { // imc = metodo da função
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },
        fala: function (assunto) { //fala = metodo da função
            return `${this.nome} ${this.sobrenome} está falando: ${assunto}. Ele(a) tem ${this.peso}Kg` 
        },                                                     
        
    };
}

const p1 = criaPessoa('Thiago', 'Wanderley', 74, 1.75 );
const p2 = criaPessoa('Gabriela', 'Bomfim', 57, 1.6);

console.log(`${p1.fala('Como está?')} e seu imc é ${p1.imc()}`);



