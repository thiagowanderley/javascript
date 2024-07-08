// PROMISES

//-> É ultilizado quando temos uma situação assíncrona. Quando não sabemos quando vai terminar

function rand (max, min) {

    return Math.floor(Math.random() * (max - min)) + min
}

function gerarNoticia () {
    console.log('noticia 01: Carro eletrico recebe taxação');
    setTimeout( () => {console.log('noticia 02: Dolar bate maxima...'), 1000 })
}

function saudacao (msg, time) {

    gerarNoticia()

    const myPromise = new Promise((res, rej) => {

    setTimeout( () => {
        console.log(msg)
    }, time * 1000)

    if (time < 5) {
        res('Mensagem enviada com sucesso, enviada abaixo de 5 seg')
    } else {
        msg = 'error:'
        rej('Tempo excedido, ultrapassou 5 seg')
    }
})

myPromise.then( data => {
    setTimeout( () => {console.log(data)}, time*1000 + 1000)
}).catch( data => {
    setTimeout( () => {console.log(data)}, time*1000 + 1000)
})

}

saudacao('ola mundo', rand(1, 10))

