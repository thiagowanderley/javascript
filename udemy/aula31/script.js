const x = true;

//Bloco geral
let nome = 'carlos' //CRIANDO
var nome2 = 'carlos' //CRIANDO

//Bloco 1
if (x) {
    let nome = 'Tadeu' //CRIANDO
    var nome2 = 'Tadeu' //REDECLARANDO

//Bloco 2
    if (x) {
        let nome = 'Dionisio' //CRIANDO
        var nome2 = 'Dionisio' //REDECLARANDO
    }
}

console.log(nome, nome2)

// var --> é redefinido a cada vez que é chamado
// let --> Recebe um valor em cada bloco
