// Funções

falaOi();

function falaOi () {
    console.log('oi');
}

// Declarando constantes com função

const saudacao = function () {
    console.log('oi de novo');
};
saudacao();

// Criando uma função que executa função

function executarFuncao (funcao) {
    console.log('vou executar sua função abaixo:')
    funcao()
}

executarFuncao(saudacao);

// ArrowFunction =>

const funcaoArrow = () => {console.log('sou uma arrow functiom')}

funcaoArrow();

// Criando uma função dentro de um objeto

const objeto = {
    falar: function () {
        console.log('sou uma função dentro de um objeto')
    },
    falar02: function () {
        console.log('olha eu de novo')
    }
}

objeto.falar(), objeto.falar02();

