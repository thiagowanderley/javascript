// PARAMETRO DE FUNÇÃO

function teste () {
    console.log('testando...')
    console.log(arguments)
    console.log(arguments[5])

    let total = 0
    for (let x of arguments) {
        total += x
    }

    console.log(total)
}


// Vai executar a função normal expressando o 'testando' na tela
// Quando chamamos o termo 'arguments' ele cria um array com os elementos que colocamos como parametros na chamada da função 

teste(1, 2, 3, 4, 5, 6, 7, 8);

function funcaoTeste (a = 0, b = 0) {  
    return a + b
}

console.log(funcaoTeste(3))

// Atribuição via desestruturação com funções:

function desestruturacao ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

desestruturacao({nome: 'Thiago', sobrenome: 'Wanderley', idade: 23})


function conta (operador, acumulador, ...numeros) {
    for (let num of numeros) {
       if(operador === '+') acumulador += num;
       if(operador === '-') acumulador -= num;
       if(operador === '*') acumulador *= num;
       if(operador === '/') acumulador /= num;
    }

    console.log(acumulador)
}

conta('*', 1, 20, 30, 40, 50)