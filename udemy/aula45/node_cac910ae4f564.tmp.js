function mostarHora () {
    let data = new Date();
    return data.toLocaleTimeString('pt-br', {hour12: false});
    // FUNÇÃO CRIADA PARA RETORNA UM VALOR (HORA ATUAL)
}

function expressarHora () {
    console.log(mostarHora())
}

setInterval(expressarHora, 1000)