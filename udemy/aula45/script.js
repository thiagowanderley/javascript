// setInterval - executada a cada...
// setTimeout - executada em...
// clearInterval - interromper depois de...

function mostarHora () {
    let data = new Date();
    return data.toLocaleTimeString('pt-br', {hour12: false});
    // FUNÇÃO CRIADA PARA RETORNA UM VALOR (HORA ATUAL)
}

const timer = setInterval(function () {console.log(mostarHora());}, 1000) //CRIANDO UM TIMER DE 1s
// Criando funções anonimas dentro de outras funções
setTimeout(function () { clearInterval(timer); console.log('interrompido') }, 3000)

